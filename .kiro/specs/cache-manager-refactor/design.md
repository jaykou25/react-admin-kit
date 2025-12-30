# 设计文档

## 概述

本设计文档描述了如何重构 rehype 插件的 CacheManager 类，移除对集中式 index.json 文件的依赖，改为使用 file-system-cache 库进行缓存管理。通过使用成熟的缓存库，我们可以避免自己实现复杂的文件读写操作，同时获得更好的性能和可靠性。

## 架构

### 当前架构问题
- 双重存储：同时维护 index.json 和单独的条目文件
- 频繁写入：每次缓存更新都需要重写整个 index.json
- 同步风险：index.json 与实际条目文件可能不一致
- 性能影响：大量缓存条目时 index.json 文件变得很大
- 自实现复杂性：手动管理文件读写、错误处理等

### 新架构设计
- 使用 file-system-cache 库：成熟的文件系统缓存解决方案
- 键值存储：使用规范化的文件路径作为缓存键
- 自动管理：库自动处理文件读写、错误处理和性能优化
- 简化实现：减少自定义代码，提高可维护性

## 组件和接口

### file-system-cache 库集成

#### 库选择理由
- **成熟稳定**：经过生产环境验证的缓存解决方案
- **自动管理**：自动处理文件读写、错误处理和性能优化
- **简单 API**：提供简洁的 get/set/remove 接口
- **内置功能**：支持 TTL、序列化、并发控制等
- **可读文件名**：支持自定义文件名生成策略

#### 依赖安装
```bash
pnpm add file-system-cache
pnpm add -D @types/file-system-cache
```

### CacheManager 类重构

#### 核心属性变更
```typescript
import FileSystemCache from 'file-system-cache';

export class CacheManager {
  private cache: FileSystemCache;
  // 移除: private cacheIndexPath: string;
  // 移除: private cacheEntriesDir: string;
  // 移除: private cacheIndex: CacheIndex = {};

  constructor(private cacheDir: string) {
    this.cache = FileSystemCache({
      basePath: cacheDir,
      ns: 'rehype-cache', // 命名空间，避免冲突
      hash: false, // 禁用键哈希，保持文件名可读
      serialize: JSON.stringify,
      deserialize: JSON.parse
    });
  }
}
```

#### 私有方法简化

##### 缓存键生成
```typescript
/**
 * 生成标准化的缓存键
 */
private generateCacheKey(filePath: string): string {
  return upath.normalize(filePath);
}
```

##### 依赖哈希计算（保持不变）
```typescript
/**
 * 计算依赖文件哈希
 */
private calculateDependencyHashes(
  demoInfo: DemoInfo,
  basePath: string,
): Record<string, string>

/**
 * 验证依赖文件哈希
 */
private validateDependencyHashes(entry: CacheEntry): boolean

/**
 * 计算内容哈希
 */
private calculateContentHash(content: string): string
```

#### 公共方法重构

##### isCacheValid()
```typescript
isCacheValid(filePath: string, contentHash: string): boolean {
  try {
    const cacheKey = this.generateCacheKey(filePath);
    const entry = this.cache.getSync(cacheKey) as CacheEntry | undefined;
    
    if (!entry) {
      return false;
    }
    
    // 检查主文件哈希
    if (entry.contentHash !== contentHash) {
      return false;
    }
    
    // 检查依赖文件哈希
    return this.validateDependencyHashes(entry);
  } catch (error) {
    console.warn('缓存验证失败:', error);
    return false;
  }
}
```

##### getCachedDemo()
```typescript
getCachedDemo(filePath: string): DemoInfo | null {
  try {
    const cacheKey = this.generateCacheKey(filePath);
    const entry = this.cache.getSync(cacheKey) as CacheEntry | undefined;
    
    return entry?.demoInfo || null;
  } catch (error) {
    console.warn('获取缓存失败:', error);
    return null;
  }
}
```

##### setCachedDemo()
```typescript
setCachedDemo(
  filePath: string,
  demoInfo: DemoInfo,
  contentHash: string,
): void {
  try {
    const cacheKey = this.generateCacheKey(filePath);
    const dependencyHashes = this.calculateDependencyHashes(demoInfo, filePath);
    
    const entry: CacheEntry = {
      contentHash,
      dependencyHashes,
      demoInfo,
      timestamp: Date.now(),
    };
    
    this.cache.setSync(cacheKey, entry);
  } catch (error) {
    console.error('保存缓存失败:', error);
  }
}
```

##### cleanupExpiredCache()
```typescript
cleanupExpiredCache(maxAge: number = 7 * 24 * 60 * 60 * 1000): void {
  try {
    // file-system-cache 不直接支持批量过期清理
    // 需要遍历所有键并检查时间戳
    const keys = this.cache.keys();
    const now = Date.now();
    let cleanedCount = 0;
    
    keys.forEach(key => {
      try {
        const entry = this.cache.getSync(key) as CacheEntry | undefined;
        if (entry && (now - entry.timestamp > maxAge)) {
          this.cache.removeSync(key);
          cleanedCount++;
        }
      } catch (error) {
        // 单个条目错误不影响整体清理
        console.warn(`清理缓存条目失败 ${key}:`, error);
      }
    });
    
    if (cleanedCount > 0) {
      console.log(`清理了 ${cleanedCount} 个过期缓存条目`);
    }
  } catch (error) {
    console.error('清理过期缓存失败:', error);
  }
}
```

##### getCacheStats()
```typescript
getCacheStats(): {
  totalEntries: number;
  totalSize: number;
  oldestEntry: number;
  newestEntry: number;
} {
  try {
    const keys = this.cache.keys();
    const totalEntries = keys.length;
    
    if (totalEntries === 0) {
      return {
        totalEntries: 0,
        totalSize: 0,
        oldestEntry: 0,
        newestEntry: 0,
      };
    }
    
    let oldestEntry = Date.now();
    let newestEntry = 0;
    
    keys.forEach(key => {
      try {
        const entry = this.cache.getSync(key) as CacheEntry | undefined;
        if (entry) {
          oldestEntry = Math.min(oldestEntry, entry.timestamp);
          newestEntry = Math.max(newestEntry, entry.timestamp);
        }
      } catch (error) {
        // 忽略单个条目的错误
      }
    });
    
    // 计算缓存目录大小
    const totalSize = this.calculateCacheSize();
    
    return {
      totalEntries,
      totalSize,
      oldestEntry,
      newestEntry,
    };
  } catch (error) {
    console.error('获取缓存统计失败:', error);
    return {
      totalEntries: 0,
      totalSize: 0,
      oldestEntry: 0,
      newestEntry: 0,
    };
  }
}
```

##### clearAllCache()
```typescript
clearAllCache(): void {
  try {
    this.cache.clear();
    console.log('已清空所有缓存');
  } catch (error) {
    console.error('清空缓存失败:', error);
  }
}
```

##### calculateCacheSize()
```typescript
/**
 * 计算缓存目录大小
 */
private calculateCacheSize(): number {
  try {
    const calculateDirSize = (dirPath: string): number => {
      let size = 0;
      if (!fs.existsSync(dirPath)) {
        return 0;
      }
      
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          size += calculateDirSize(filePath);
        } else {
          size += stats.size;
        }
      }
      return size;
    };
    
    return calculateDirSize(this.cacheDir);
  } catch (error) {
    console.warn('计算缓存大小失败:', error);
    return 0;
  }
}
```

## 数据模型

### file-system-cache 缓存策略

#### 缓存键策略
```typescript
// 使用 upath.normalize 进行路径规范化作为缓存键
private generateCacheKey(filePath: string): string {
  return upath.normalize(filePath);
}

// 示例：
// 输入: "D:\project\packages\react-admin-kit\src\ModalForm\demos\basic\index.tsx"
// 输出: "D:/project/packages/react-admin-kit/src/ModalForm/demos/basic/index.tsx"
```

#### 缓存值结构
```typescript
// 保持现有的 CacheEntry 结构不变
interface CacheEntry {
  contentHash: string; // 文件内容哈希
  dependencyHashes: Record<string, string>; // 依赖文件哈希映射
  demoInfo: DemoInfo; // 组件信息
  timestamp: number; // 缓存时间戳
}
```

#### file-system-cache 配置
```typescript
const cache = FileSystemCache({
  basePath: cacheDir, // 缓存根目录
  ns: 'rehype-cache', // 命名空间，避免与其他缓存冲突
  hash: false, // 禁用键哈希，保持文件名可读
  serialize: JSON.stringify, // 序列化方法（默认）
  deserialize: JSON.parse // 反序列化方法（默认）
});
```

## 错误处理

### 文件系统错误处理
- **文件不存在**：视为缓存未命中，返回 null
- **文件损坏**：记录警告，视为缓存未命中
- **权限错误**：记录错误，优雅降级
- **磁盘空间不足**：记录错误，停止写入操作

### 路径映射错误处理
- **映射初始化失败**：记录警告，使用实时扫描模式
- **路径解析失败**：跳过该条目，继续处理其他条目
- **哈希冲突**：使用文件内容进一步区分（极低概率）

## 测试策略

### 单元测试覆盖

#### 核心功能测试
- 路径映射的生成和解析
- 条目文件的读写操作
- 缓存有效性检查
- 过期缓存清理

#### 边界情况测试
- 空缓存目录
- 损坏的条目文件
- 文件系统权限问题
- 大量缓存条目的性能

#### 兼容性测试
- 与现有 API 的兼容性
- 不同操作系统的路径处理
- 从旧缓存格式的迁移

### 集成测试

#### 端到端测试
- 完整的缓存生命周期
- 多个并发缓存操作
- 缓存目录的创建和清理

#### 性能测试
- 大量缓存条目的扫描性能
- 内存使用情况
- 文件 I/O 操作的效率



## 性能优化

### 内存优化
- 路径映射使用 Map 而非普通对象
- 延迟加载缓存内容
- 定期清理内存中的映射缓存

### I/O 优化
- 批量文件操作
- 异步文件读写
- 文件系统监听（可选）

### 缓存策略
- LRU 缓存最近访问的条目
- 预加载常用的缓存条目
- 智能的扫描频率控制