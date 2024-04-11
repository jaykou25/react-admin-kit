import { Upload } from 'antd';
import { cloneElement, useContext, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { FormUploadContext } from '../SettingProvider/context';
import { FormUploadProps, FormUploadSelfProps } from './types';

/**
 * 给 file 对象赋上默认的 status: done
 * initialValues 和 setFieldsValue 两种情况下的 file 对象需要带上 status, 否则表单收集不到.
 * beforeUpload 为 false 的 file 对象也会进到 fileList, 它的 status 为空, 所以表单不收集
 * @param files
 */
function withDefaultStatus(files: any = []) {
  const $files = files || [];
  return $files.map((file: any) => {
    if (!file.status) {
      file.status = 'done';
    }
    return file;
  });
}

function FormUpload(props: FormUploadProps) {
  const {
    value,
    onChange,
    multiple = true,
    children,
    onFinish,
    errorHandle,
    responseToFileList,
    nameKey,
    urlKey,
    ...rest
  } = props;

  const {
    urlKey: urlKeyContext,
    nameKey: nameKeyContext,
    responseToFileList: responseToFileListContext,
    errorHandle: errorHandleContext,
    ...restUploadProps
  } = useContext(FormUploadContext) || {};

  const $nameKey = nameKey || nameKeyContext || 'name';
  const $urlKey = urlKey || urlKeyContext || 'url';

  /**
   * 如果先前的 value 有值 [{name: '', url: ''}], 通过 setFieldsValue 设成空数组[]后, value 会变成 [undefined]
   */
  const $value = value
    ? value
        .filter(Boolean)
        .map((val) => ({ ...val, name: val[$nameKey], url: val[$urlKey] }))
    : value;

  // 是否有调用父组件的 onChange 函数
  const emitChangeRef = useRef<boolean | null>(null);
  const firstTimeRef = useRef(true);
  const [innerFileList, setInnerFileList] = useState(withDefaultStatus($value));

  const [uploading, setUploading] = useState(false);

  /**x
   * FormUpload 组件的设计是内部维护自己的文件列表, 然后监听外部 value 属性的变化, 来达到近似受控组件的效果.
   * 为什么说近似, 是因为有一个例外, 当上传的文件列表中有上传错误的文件时, 通过 props.onChnage 传给外面的文件与内部的文件不一致.
   * 传给外面的文件都是上传成功的, 但是里面的错误文件最好也要放在那里.
   * 就是这个例外需要两边不同步, 通过一个 emitChangeRef 来标记并阻止他们同步.
   */
  useEffect(() => {
    // 忽略第一次
    if (firstTimeRef.current) {
      firstTimeRef.current = false;
      return;
    }

    /**
     * 监听 value, 外部和内部同步. (emitChange 阻止的除外)
     */
    if (!emitChangeRef.current) {
      setInnerFileList(withDefaultStatus($value));
    }

    emitChangeRef.current = false;
  }, [value]);

  const handleOnChange = (info) => {
    setUploading(true);
    const fileList = [...info.fileList];

    const $fileList = fileList.map((file) => {
      /**
       * 将后端的返回合并进file对象
       */
      if (file.response) {
        const res = file.response;
        const resToFileList = responseToFileList || responseToFileListContext;
        const resObj = resToFileList ? resToFileList(res) : {};

        return { ...file, ...resObj };
      }
      return file;
    });

    if (info.file.status === 'error') {
      const $errorHandle = errorHandle || errorHandleContext;

      if ($errorHandle) {
        $errorHandle(info.file.response || {});
      }
    }

    flushSync(() => setInnerFileList($fileList));

    //  beforeUpload为false的文件也会进到onChange里
    if ($fileList.every((file) => file.status !== 'uploading')) {
      const successFiles = $fileList.filter((file) =>
        ['done', 'success'].includes(file.status),
      );
      if (onChange) {
        onChange(successFiles);
        emitChangeRef.current = true;
      }

      if (onFinish) onFinish(successFiles);

      setUploading(false);
    }
  };

  const renderChildren = () => {
    if (children) {
      return typeof children === 'function'
        ? children({ loading: uploading })
        : cloneElement(children, { loading: uploading });
    }

    return children;
  };

  return (
    <Upload
      multiple={multiple}
      {...restUploadProps}
      fileList={innerFileList}
      onChange={handleOnChange}
      {...rest}
    >
      {renderChildren()}
    </Upload>
  );
}

export default FormUpload;

// 用于生成api文档
export const FormUploadType: React.FC<FormUploadSelfProps> = () => {
  return null;
};
