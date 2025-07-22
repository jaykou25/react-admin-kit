import Test from './components/Test';
import { Previewer } from 'docusaurus-lib-dev-components';
import { translate } from '@docusaurus/Translate';

const UnitTest = () => {
  return (
    <>
      <div>
        <Previewer
          component={<Test />}
          componentInfo={{
            id: 'test-component',
            sourceCode: 'const Test = () => <div>Test</div>;',
            dependencies: [
              {
                type: 'FILE',
                source: 'index.tsx',
                resolvedSource: 'index.tsx',
                ext: 'tsx',
                value:
                  "import { useState } from 'react';\nimport { Button, ModalForm } from 'react-admin-kit';\n\nconst Basic = () => {\n  const [open, setOpen] = useState(false);\n\n  const onFinish = (values: any) => {\n    console.log({ values });\n  };\n\n  return (\n    <div>\n      <div style={{ textAlign: 'start' }}>\n        <Button type=\"primary\" onClick={() => setOpen(true)}>\n          打开弹窗\n        </Button>\n      </div>\n\n      <ModalForm\n        title={'基本表单'}\n        open={open}\n        onCancel={() => setOpen(false)}\n        onFinish={onFinish}\n        columns={[\n          {\n            title: '用户名',\n            dataIndex: 'username',\n            required: true,\n          },\n          {\n            title: '电话',\n            dataIndex: 'phone',\n          },\n        ]}\n      />\n    </div>\n  );\n};\n\nexport default Basic;\n",
              },
            ],
          }}
          colorMode={'light'}
          tooltipRender={(showCode) =>
            translate({
              id: `previewer.actions.code.${showCode ? 'shrink' : 'expand'}`,
            })
          }
          isBrowser
        />
      </div>
      300
    </>
  );
};

export default UnitTest;
