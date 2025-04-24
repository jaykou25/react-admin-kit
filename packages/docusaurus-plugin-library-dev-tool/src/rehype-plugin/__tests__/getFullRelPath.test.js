import { getFullRelPath } from '../utils';

describe('getFullRelPath', () => {
  it('应该正确处理同级文件的相对路径', () => {
    const result = getFullRelPath('/home/user/dir/Button.tsx', './Button');
    expect(result).toBe('./Button.tsx');
  });

  it('应该正确处理目录的相对路径', () => {
    const result = getFullRelPath('/home/user/dir/index.js', './dir');
    expect(result).toBe('./dir/index.js');
  });

  it('应该正确处理多级目录的相对路径', () => {
    const result = getFullRelPath(
      '/home/user/dir/components/utils/index.js',
      '../../utils',
    );
    expect(result).toBe('../../utils/index.js');
  });

  it('应该正确处理 Windows 风格的路径', () => {
    const result = getFullRelPath(
      'D:\\projects\\components\\Input.tsx',
      './Input',
    );
    expect(result).toBe('./Input.tsx');
  });
});
