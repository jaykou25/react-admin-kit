import { Upload } from 'antd';
import { FormUploadProps, FormUploadSelfProps } from './types';
import { useContext } from 'react';
import { flushSync } from 'react-dom';
import { FormUploadContext } from '../SettingProvider/context';

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
  const $value = value
    ? value.map((val) => ({ ...val, name: val[$nameKey], url: val[$urlKey] }))
    : value;

  const handleOnChange = (info) => {
    const fileList = [...info.fileList];

    const $fileList = fileList.map((file) => {
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
        $errorHandle(info.file.response);
      }
    }

    //  beforeUpload为false的文件也会进到onChange里
    if (onChange) flushSync(() => onChange($fileList, info.file));

    if (onFinish && $fileList.every((file) => file.status !== 'uploading')) onFinish($fileList);
  };

  return (
    <Upload
      multiple={multiple}
      {...restUploadProps}
      fileList={$value}
      onChange={handleOnChange}
      {...rest}
    >
      {children}
    </Upload>
  );
}

export default FormUpload;

// 用于生成api文档
export const Self: React.FC<FormUploadSelfProps> = () => {
  return null;
};
