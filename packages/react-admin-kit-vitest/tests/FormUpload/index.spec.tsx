import { Form } from 'antd';
import {
  describe,
  expect,
  test,
  vi,
  beforeAll,
  afterEach,
  afterAll,
} from 'vitest';
import { render } from 'vitest-browser-react';
import FormUpload from 'react-admin-kit/FormUpload';
import SchemaForm from 'react-admin-kit/SchemaForm';
import { setupWorker } from 'msw/browser';
import { handlers } from '../mocks/handlers';

// 设置 MSW worker
const worker = setupWorker(...handlers);

describe('FormUpload 组件验证', () => {
  // 在所有测试前启动 worker
  beforeAll(async () => {
    await worker.start();
  });

  // 每个测试后重置 handlers
  afterEach(() => worker.resetHandlers());

  // 所有测试后关闭 worker
  afterAll(() => worker.stop());

  const createMockFile = (name, status = 'done', response = null) => ({
    uid: Math.random().toString(),
    name,
    status,
    response,
    url: `http://example.com/${name}`,
  });

  const createMockFileList = (files) => files.map(createMockFile);

  test('should collect form values correctly', async () => {
    const onFinish = vi.fn();
    const initialFiles = createMockFileList(['test.txt']);

    const { getByText } = await render(
      <Form onFinish={onFinish} initialValues={{ files: initialFiles }}>
        <Form.Item name="files">
          <FormUpload />
        </Form.Item>
        <button type="submit">Submit</button>
      </Form>,
    );

    await getByText('Submit').click();

    await expect(onFinish).toHaveBeenCalledWith({
      files: expect.arrayContaining([
        expect.objectContaining({ name: 'test.txt' }),
      ]),
    });
  });

  test('should handle complete file upload + form submission flow', async () => {
    const onFinish = vi.fn();

    const Demo = (props) => {
      return (
        <SchemaForm
          onFinish={props.onFinish}
          columns={[
            {
              title: 'Files',
              dataIndex: 'files',
              renderFormItem: () => <FormUpload action="/upload" />,
            },
          ]}
          submitter={{
            submitButtonProps: {
              'data-testid': 'submit-btn',
            },
          }}
        />
      );
    };

    const { container, getByTestId } = await render(
      <Demo onFinish={onFinish} />,
    );

    // Upload file
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });

    const input = container.querySelector('input[type="file"]');

    if (!input) throw new Error('File input not found');

    // 直接使用原生方式设置文件并触发 change 事件
    Object.defineProperty(input, 'files', {
      value: [file],
      writable: false,
    });
    input.dispatchEvent(new Event('change', { bubbles: true }));

    // Submit form
    await getByTestId('submit-btn').click();

    await expect(onFinish).toHaveBeenCalledWith({
      files: expect.arrayContaining([
        expect.objectContaining({
          name: 'test.txt',
          status: 'done',
        }),
      ]),
    });
  });
});
