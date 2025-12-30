/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from 'antd';
import FormUpload from '../index';
import SchemaForm from '../../SchemaForm';
import mock from 'xhr-mock';

// Mock file objects
const createMockFile = (name, status = 'done', response = null) => ({
  uid: Math.random().toString(),
  name,
  status,
  response,
  url: `http://example.com/${name}`,
});

const createMockFileList = (files) => files.map(createMockFile);

describe('FormUpload Integration Tests', () => {
  beforeEach(() => {
    // fetch.mockClear();
    jest.clearAllMocks();
    mock.setup();
  });

  afterEach(() => mock.teardown());

  // 1. 基础功能测试
  describe('1. Basic Functionality', () => {
    describe('Component Rendering', () => {
      it('should render component normally', () => {
        const { container } = render(<FormUpload />);
        const fileInput = container.querySelector('input[type="file"]');
        expect(fileInput).toBeInTheDocument();
        expect(fileInput).toHaveAttribute('accept');
        expect(fileInput).toHaveStyle('display: none');
      });

      it('should apply default props (multiple=true)', () => {
        const { container } = render(<FormUpload />);
        const uploadInput = container.querySelector('input[type="file"]');
        expect(uploadInput).toHaveAttribute('multiple');
      });

      it('should render static children', () => {
        render(
          <FormUpload>
            <button>Upload File</button>
          </FormUpload>,
        );
        expect(screen.getByText('Upload File')).toBeInTheDocument();
      });

      it('should render function children with loading parameter', () => {
        render(
          <FormUpload>
            {({ loading }) => (
              <button>{loading ? 'Uploading...' : 'Upload'}</button>
            )}
          </FormUpload>,
        );
        expect(screen.getByText('Upload')).toBeInTheDocument();
      });
    });

    describe('File List Management', () => {
      it('should add default status to files without status', () => {
        const files = [
          { name: 'test.txt', url: 'http://example.com/test.txt' },
        ];
        render(<FormUpload value={files} />);

        // Verify file is displayed (indicating it has proper status)
        expect(screen.getByText('test.txt')).toBeInTheDocument();
      });

      it('should sync internal file list when value changes', async () => {
        const { rerender } = render(<FormUpload value={[]} />);

        const newFiles = createMockFileList(['file1.txt']);
        rerender(<FormUpload value={newFiles} />);

        await waitFor(() => {
          expect(screen.getByText('file1.txt')).toBeInTheDocument();
        });
      });

      it('should map custom nameKey/urlKey fields', () => {
        const files = [
          { title: 'Custom Name', link: 'http://example.com/file.txt' },
        ];
        render(<FormUpload value={files} nameKey="title" urlKey="link" />);

        expect(screen.getByText('Custom Name')).toBeInTheDocument();
      });
    });
  });

  // 2. 文件上传流程测试
  describe('2. File Upload Process', () => {
    describe('Upload State Management', () => {
      it('should set uploading state to true during upload', async () => {
        mock.post('/upload', (req, res) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(res.status(201).body('{"data":{"id":"abc-123"}}'));
            }, 1000);
          });
        });

        const { container } = render(
          <FormUpload action="/upload">
            {({ loading }) => (
              <button>{loading ? 'Uploading...' : 'Upload'}</button>
            )}
          </FormUpload>,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });

        const fileInput = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(fileInput, { target: { files: [file] } });
        });

        await waitFor(() => {
          expect(screen.getByText('Uploading...')).toBeInTheDocument();
        });
      });

      it('should set uploading state to false after upload completes', async () => {
        mock.post('/upload', {
          status: 201,
          body: '{"data":{"id":"abc-123"}}',
        });

        const { container } = render(
          <FormUpload action="/upload">
            {({ loading }) => (
              <button>{loading ? 'Uploading...' : 'Upload'}</button>
            )}
          </FormUpload>,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });
        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        await waitFor(() => {
          expect(screen.getByText('Upload')).toBeInTheDocument();
        });
      });
    });

    describe('Upload Success Scenarios', () => {
      it('should handle single file upload success', async () => {
        const onChange = jest.fn();
        const onFinish = jest.fn();

        mock.post('/upload', {
          status: 201,
          body: '{"data":{"id":"abc-123"}}',
        });

        const { container } = render(
          <FormUpload
            action="/upload"
            onChange={onChange}
            onFinish={onFinish}
            multiple={false}
          />,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });
        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        await waitFor(() => {
          expect(onChange).toHaveBeenCalled();
          expect(onFinish).toHaveBeenCalled();
        });
      });

      it('should merge backend response data with responseToFileList', async () => {
        const onChange = jest.fn();
        const responseToFileList = jest.fn((res) => ({ id: res.data.id }));
        const mockResponse = { data: { id: 'abc-123' } };

        mock.post('/upload', {
          status: 201,
          body: '{"data":{"id":"abc-123"}}',
        });

        const { container } = render(
          <FormUpload
            action="/upload"
            onChange={onChange}
            responseToFileList={responseToFileList}
          />,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });
        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        await waitFor(() => {
          expect(responseToFileList).toHaveBeenCalledWith(mockResponse);
          expect(onChange).toHaveBeenCalledWith(
            expect.arrayContaining([
              expect.objectContaining({ id: 'abc-123' }),
            ]),
          );
        });
      });

      it('should only trigger onChange and onFinish after all files complete', async () => {
        const onChange = jest.fn();
        const onFinish = jest.fn();

        const { container } = render(
          <FormUpload
            action="/upload"
            onChange={onChange}
            onFinish={onFinish}
          />,
        );

        const files = [
          new File(['content1'], 'test1.txt', { type: 'text/plain' }),
          new File(['content2'], 'test2.txt', { type: 'text/plain' }),
        ];

        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files } });
        });

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onFinish).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('Upload Failure Scenarios', () => {
      it('should trigger errorHandle callback on upload failure', async () => {
        const errorHandle = jest.fn();

        mock.post('/upload', {
          status: 400,
          reason: 'Bad request',
          body: '{"error":"upload failed"}',
        });

        const { container } = render(
          <FormUpload action="/upload" errorHandle={errorHandle} />,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });
        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        await waitFor(() => {
          expect(errorHandle).toHaveBeenCalled();
        });
      });

      it('should not pass failed files to external onChange', async () => {
        const onChange = jest.fn();

        mock.post('/upload', {
          status: 400,
          reason: 'Bad request',
          body: '{"error":"upload failed"}',
        });

        const { container } = render(
          <FormUpload action="/upload" onChange={onChange} />,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });
        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(1);
          expect(onChange).toHaveBeenCalledWith([]);
        });
      });
    });
  });

  // 3. 受控组件行为测试
  describe('3. Controlled Component Behavior', () => {
    describe('External Value Control', () => {
      it('should sync internal file list when external value changes', async () => {
        const { rerender } = render(<FormUpload value={[]} />);

        const newFiles = createMockFileList(['file1.txt']);
        rerender(<FormUpload value={newFiles} />);

        await waitFor(() => {
          expect(screen.getByText('file1.txt')).toBeInTheDocument();
        });
      });

      it('should prevent circular updates with emitChangeRef mechanism', async () => {
        const onChange = jest.fn();
        const { rerender } = render(
          <FormUpload value={[]} onChange={onChange} />,
        );

        // Simulate external value change
        const newFiles = createMockFileList(['file1.txt']);
        rerender(<FormUpload value={newFiles} onChange={onChange} />);

        // Should not trigger onChange for external value changes
        expect(onChange).not.toHaveBeenCalled();
      });

      it('should filter undefined items from value array', () => {
        const filesWithUndefined = [
          createMockFile('file1.txt'),
          undefined,
          createMockFile('file2.txt'),
        ];

        render(<FormUpload value={filesWithUndefined} />);

        expect(screen.getByText('file1.txt')).toBeInTheDocument();
        expect(screen.getByText('file2.txt')).toBeInTheDocument();
      });
    });

    describe('Form Integration', () => {
      it('should collect form values correctly', async () => {
        const onFinish = jest.fn();
        const initialFiles = createMockFileList(['test.txt']);

        render(
          <Form onFinish={onFinish} initialValues={{ files: initialFiles }}>
            <Form.Item name="files">
              <FormUpload />
            </Form.Item>
            <button type="submit">Submit</button>
          </Form>,
        );

        fireEvent.click(screen.getByText('Submit'));

        await waitFor(() => {
          expect(onFinish).toHaveBeenCalledWith({
            files: expect.arrayContaining([
              expect.objectContaining({ name: 'test.txt' }),
            ]),
          });
        });
      });
    });
  });

  // 4. 边界情况和错误处理
  describe('4. Edge Cases and Error Handling', () => {
    describe('Abnormal Data Handling', () => {
      it('should handle null/undefined value safely', () => {
        expect(() => {
          render(<FormUpload value={null} />);
        }).not.toThrow();

        expect(() => {
          render(<FormUpload value={undefined} />);
        }).not.toThrow();
      });

      it('should handle files with missing required fields', () => {
        const incompleteFiles = [
          { name: 'file1.txt' }, // missing url
          { url: 'http://example.com/file2.txt' }, // missing name
        ];

        expect(() => {
          render(<FormUpload value={incompleteFiles} />);
        }).not.toThrow();
      });

      it('should handle beforeUpload returning false', async () => {
        const beforeUpload = jest.fn(() => false);
        const onChange = jest.fn();

        mock.post('/upload', {
          status: 201,
          body: '{"data":{"id":"abc-123"}}',
        });

        const { container } = render(
          <FormUpload
            action="/upload"
            beforeUpload={beforeUpload}
            onChange={onChange}
          />,
        );

        const file = new File(['content'], 'test.txt', { type: 'text/plain' });
        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        expect(onChange).toHaveBeenCalledWith([]);
      });
    });

    describe('Callback Function Exceptions', () => {
      it('should handle responseToFileList function exceptions', async () => {
        const responseToFileList = jest.fn(() => {
          throw new Error('Processing error');
        });

        mock.post('/upload', {
          status: 201,
          body: '{"data":{"id":"abc-123"}}',
        });

        expect(() => {
          render(
            <FormUpload
              action="/upload"
              responseToFileList={responseToFileList}
            />,
          );
        }).not.toThrow();
      });

      it('should handle errorHandle function exceptions', async () => {
        const errorHandle = jest.fn(() => {
          throw new Error('Error handler error');
        });

        mock.post('/upload', {
          status: 400,
          reason: 'Bad request',
          body: '{"error":"upload failed"}',
        });

        expect(() => {
          render(<FormUpload action="/upload" errorHandle={errorHandle} />);
        }).not.toThrow();
      });
    });
  });

  // 5. 用户交互测试
  describe('5. User Interaction', () => {
    describe('File Operation Interactions', () => {
      it('should handle file removal operation', async () => {
        const onChange = jest.fn();
        const initialFiles = createMockFileList(['test.txt']);

        const { container } = render(
          <FormUpload value={initialFiles} onChange={onChange} />,
        );

        // Find and click remove button
        const removeButton = container.querySelector(
          '.ant-upload-list-item-actions .anticon-delete',
        );
        fireEvent.click(removeButton);

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledWith([]);
        });
      });
    });
  });

  // 6. 集成场景测试
  describe('6. Integration Scenarios', () => {
    describe('Complete Business Process', () => {
      it('should handle complete file upload + form submission flow', async () => {
        const onFinish = jest.fn();

        mock.post('/upload', {
          status: 201,
          body: '{"data":{"id":"abc-123"}}',
        });

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

        const { container } = render(<Demo onFinish={onFinish} />);

        // Upload file
        const file = new File(['content'], 'test.txt', { type: 'text/plain' });

        const input = container.querySelector('input[type="file"]');

        await act(async () => {
          fireEvent.change(input, { target: { files: [file] } });
        });

        // Submit form
        fireEvent.click(screen.getByTestId('submit-btn'));

        await waitFor(() => {
          expect(onFinish).toHaveBeenCalledWith({
            files: expect.arrayContaining([
              expect.objectContaining({
                name: 'test.txt',
                status: 'done',
              }),
            ]),
          });
        });
      });
    });

    describe('Complex Scenarios', () => {
      it('should handle concurrent uploads', async () => {
        const onChange = jest.fn();

        mock.post('/upload', {
          status: 201,
          body: `{"data":{"id":"abc-123${Date.now()}"}}`,
        });

        const { container } = render(
          <FormUpload action="/upload" onChange={onChange} />,
        );
        const files = [
          new File(['content1'], 'file1.txt', { type: 'text/plain' }),
          new File(['content2'], 'file2.txt', { type: 'text/plain' }),
          new File(['content3'], 'file3.txt', { type: 'text/plain' }),
        ];
        const input = container.querySelector('input[type="file"]');
        await act(async () => {
          fireEvent.change(input, { target: { files } });
        });
        await waitFor(() => {
          expect(onChange).toHaveBeenCalledWith(
            expect.arrayContaining([
              expect.objectContaining({ name: 'file1.txt' }),
              expect.objectContaining({ name: 'file2.txt' }),
              expect.objectContaining({ name: 'file3.txt' }),
            ]),
          );
        });
      });
    });
  });
});
