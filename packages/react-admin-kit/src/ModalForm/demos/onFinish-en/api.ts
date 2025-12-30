import { message } from 'antd';

export function mockAddUser(
  data: any,
): Promise<{ success: boolean; data: any }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      message.info('User created successfully');
      resolve({ success: true, data });
    }, 1000);
  });
}

export function mockEditUser(
  data: any,
): Promise<{ success: boolean; data: any }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      message.info(`User edited successfully, id: ${data.id}`);
      resolve({ success: true, data });
    }, 1000);
  });
}
