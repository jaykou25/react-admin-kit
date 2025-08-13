import {
  clearSelectCache,
  LinkButton,
  FormUpload,
  SchemaForm,
} from 'react-admin-kit';
import { useState } from 'react';

const UnitTest = () => {
  const [files, setFiles] = useState([]);
  return (
    <>
      <div>
        <SchemaForm
          submitter={{
            submitButtonProps: {
              'data-testid': 'submit-btn',
            },
          }}
          columns={[
            {
              title: 'Files',
              dataIndex: 'files',
              renderFormItem: () => (
                <FormUpload
                  action="https://mock.apifox.cn/m1/1864670-0-default/mockUpload"
                  headers={{ Authorization: 'myToken' }}
                  value={files}
                  onChange={(val) => setFiles(val)}
                  responseToFileList={() => {
                    throw new Error('Processing error');
                  }}
                >
                  upload
                </FormUpload>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default UnitTest;
