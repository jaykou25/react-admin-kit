import { message } from 'antd';

export function mockAddUser(
  data: any,
): Promise<{ success: boolean; data: any }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      message.info('新增用户成功');
      resolve({ success: true, data });
    }, 1000);
  });
}

export function mockEditUser(
  data: any,
): Promise<{ success: boolean; data: any }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      message.info(`编辑用户成功 id: ${data.id}`);
      resolve({ success: true, data });
    }, 1000);
  });
}
