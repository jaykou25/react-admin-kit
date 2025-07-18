import upath from 'upath';

/**
 * 转换为 Unix 风格路径
 */
export function toUnixPath(filePath: string): string {
  return upath.normalize(filePath);
}
