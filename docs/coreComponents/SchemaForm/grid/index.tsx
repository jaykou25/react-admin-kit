import { SchemaForm } from 'react-admin-kit';
import { Button } from 'antd';
import { columns } from './columns';
import { useRef } from 'react';

import type { FormInstance } from 'antd';

const Grid = () => {
  const formRef = useRef<FormInstance>();

  const onFinish = (values: any) => {
    console.log({ values });
  };

  return (
    <div>
      <SchemaForm
        grid={true}
        /**
         * 可传入Antd Grid栅格组件的 Row属性。
         * https://4x.ant.design/components/grid-cn/#Row
         */
        rowProps={{ gutter: [8, 0] }}
        /**
         * 可传入Antd Grid栅格组件的 Col属性。
         * https://4x.ant.design/components/grid-cn/#Col
         */
        colProps={{ span: 8 }} // 全局控制一行三列，同时在 columns 上可以单独覆盖
        onFinish={onFinish}
        formRef={formRef}
        columns={columns}
        autoFocusFirstInput={false}
      />

      <div style={{ textAlign: 'end' }}>
        <Button style={{ marginRight: '10px' }} onClick={() => formRef.current?.resetFields()}>
          重置
        </Button>
        <Button type="primary" onClick={() => formRef.current?.submit()}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default Grid;
