import { PathResolver } from '../utils/path-resolver';

describe('PathResolver', () => {
  let pathResolver;

  beforeEach(() => {
    pathResolver = new PathResolver();
  });

  describe('resolveAlias', () => {
    it('应该正确解析别名路径', () => {
      const alias = {
        '@@': '/src/components',
        '@': '/src',
      };

      expect(pathResolver.resolveAlias('@@/Button/demos/basic', alias)).toBe(
        '/src/components/Button/demos/basic',
      );

      expect(pathResolver.resolveAlias('@/utils/helper', alias)).toBe(
        '/src/utils/helper',
      );
    });

    it('应该返回原路径如果没有匹配的别名', () => {
      const alias = { '@@': '/src/components' };
      const path = './relative/path';

      expect(pathResolver.resolveAlias(path, alias)).toBe(path);
    });
  });

  describe('getFullRelPath', () => {
    it('应该正确生成带后缀的相对路径', () => {
      expect(
        pathResolver.getFullRelPath('/home/user/dir/Hello.tsx', './Hello'),
      ).toBe('./Hello.tsx');

      expect(
        pathResolver.getFullRelPath('/home/user/dir/index.js', './dir'),
      ).toBe('./dir/index.js');
    });
  });

  describe('toUnixPath', () => {
    it('应该转换为Unix风格路径', () => {
      expect(pathResolver.toUnixPath('C:\\Users\\test\\file.tsx')).toBe(
        'C:/Users/test/file.tsx',
      );

      expect(pathResolver.toUnixPath('/unix/path/file.tsx')).toBe(
        '/unix/path/file.tsx',
      );
    });
  });
});
