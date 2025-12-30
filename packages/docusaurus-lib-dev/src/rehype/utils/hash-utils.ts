import { createHash } from 'crypto';

/**
 * 生成文件内容的 SHA-256 哈希值
 */
export function calculateContentHash(content: string): string {
  return createHash('sha256').update(content, 'utf8').digest('hex');
}

/**
 * 生成短哈希值（用于组件命名）
 */
export function generateShortHash(input: string, length: number = 6): string {
  return createHash('sha256')
    .update(input)
    .digest('base64')
    .replace(/[+/=]/g, '') // 移除特殊字符
    .substring(0, length);
}

/**
 * 基于文件路径生成哈希值
 */
export function generateFileHash(filePath: string): string {
  return generateShortHash(filePath, 8);
}
