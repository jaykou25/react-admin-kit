import type { UploadFile, UploadProps } from 'antd';

export type FormUploadSelfProps = {
  /**
   * @zh-Hans    文件上传接口
   * @en         Uploading URL
   */
  action?: string;
  /**
   * @zh-Hans 文件列表. { name: string; url: string; status: string }
   * @en     File list. { name: string; url: string; status: string }
   */
  value?: UploadProps['fileList'] | '';
  /**
   * @zh-Hans 文件变动后的回调; 该属性在 v0.3 版本后发生了变更, 改成与 onFinish 属性一致, 只有当文件全部上传完毕后才触发.
   * @en    Callback after file change; This property has changed in version 0.3, and it is changed to be consistent with the onFinish property. It is only triggered when all files are uploaded.
   */
  onChange?: (files: UploadFile[]) => void;
  /**
   * @zh-Hans 文件全部上传完成后的回调(所有文件的状态都是非uploading)
   * @en   Callback after all files are uploaded (all files are not uploading)
   */
  onFinish?: (files: UploadFile[]) => void;
  /**
   * @zh-Hans 自定义文件列表中name的取值字段
   * @en  Custom field for file list name
   * @default name
   */
  nameKey?: string;
  /**
   * @zh-Hans 自定义文件列表中url的取值字段
   * @en Custom field for file list url
   * @default url
   */
  urlKey?: string;
  /**
   * @zh-Hans       可以将后台返回的数据合并进 fileList
   * @en       You can merge the data returned by the background into fileList
   */
  responseToFileList?: (res) => Record<string, any>;

  /**
   * @zh-Hans        上传失败后的处理函数
   * @en       Error handling function after upload failure
   */
  errorHandle?: (res) => void;

  /**
   * @zh-Hans  children
   * @en   children
   * @type ({ loading: boolean }) => Element | Element
   */
  children?: any | [(childrenProp: { loading: boolean }) => any];
};

export type FormUploadProps = Omit<UploadProps, 'children'> &
  FormUploadSelfProps;
