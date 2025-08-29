// import Demo from '../../../../packages/react-admin-kit/src/SchemaForm/demos/readonly-basic-description';
import Demo from '../../../../packages/react-admin-kit/src/SchemaForm/demos/embed-simple-descriptions';
import Demo2 from '../../../../packages/react-admin-kit/src/SchemaForm/demos/readonly-form-descriptions';
import { SchemaForm } from 'react-admin-kit';
import { Grid } from 'antd';

const Page = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Demo />
      {/* <Demo2 /> */}

      {/* <SchemaForm
        grid
        colProps={{ sm: 24, md: 8 }}
        columns={[
          {
            title: 'A1',
            colProps: { xs: 8, md: 24 },
          },
          {
            title: 'A2',
          },
          {
            title: 'A3',
          },
          {
            title: 'A4',
          },
          {
            title: 'A5',
          },
        ]}
      /> */}
    </div>
  );
};

export default Page;
