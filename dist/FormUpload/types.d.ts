import type { UploadFile, UploadProps } from 'antd';
export type FormUploadSelfProps = {
    /**
     * @description 文件上传接口
     */
    action?: string;
    /**
     * @description 文件列表. { name: string; url: string; status: string }
     */
    value?: UploadProps['fileList'];
    /**
     * @description 文件变动后的回调; 该属性在 v0.3 版本后发生了变更, 改成与 onFinish 属性一致, 只有当文件全部上传完毕后才触发.
     */
    onChange?: (files: UploadFile[]) => void;
    /**
     * @description 文件全部上传完成后的回调(所有文件的状态都是非uploading)
     */
    onFinish?: (files: UploadFile[]) => void;
    /**
     * @description 自定义文件列表中name的取值字段
     * @default name
     */
    nameKey?: string;
    /**
     * @description 自定义文件列表中url的取值字段
     * @default url
     */
    urlKey?: string;
    /**
     * @description       可以将后台返回的数据合并进 fileList
     */
    responseToFileList?: (res: any) => Record<string, any>;
    /**
     * @description       上传失败后的处理函数
     */
    errorHandle?: (res: any) => void;
    children?: any;
};
export type FormUploadProps = UploadProps & FormUploadSelfProps;
