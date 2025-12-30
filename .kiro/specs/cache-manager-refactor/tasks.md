# 实现计划

- [x] 1. 安装和配置 file-system-cache 依赖

  - 在 packages/docusaurus-lib-dev 中安装 file-system-cache 库
  - 安装对应的 TypeScript 类型定义
  - _需求: 1.1, 2.1_

- [x] 2. 重构 CacheManager 类的核心结构

  - 移除 cacheIndexPath、cacheEntriesDir 和 cacheIndex 属性
  - 添加 file-system-cache 实例作为私有属性
  - 更新构造函数以初始化 file-system-cache
  - _需求: 1.1, 2.1_

- [x] 3. 实现缓存键生成逻辑

  - 创建 generateCacheKey 私有方法
  - 使用 upath.normalize 进行路径规范化
  - 保持简单的键生成策略
  - _需求: 4.1, 4.3_

- [x] 4. 重构 isCacheValid 方法

  - 移除对 this.cacheIndex 的依赖
  - 使用 file-system-cache 的 getSync 方法读取缓存条目
  - 保持现有的哈希验证逻辑
  - 添加适当的错误处理
  - _需求: 1.2, 2.2, 5.1, 5.3_

- [ ] 5. 重构 getCachedDemo 方法

  - 移除对 this.cacheIndex 的依赖
  - 使用 file-system-cache 的 getSync 方法读取缓存条目
  - 返回相同的 DemoInfo 结构
  - 添加适当的错误处理
  - _需求: 1.3, 2.3, 5.1, 5.3_

- [x] 6. 重构 setCachedDemo 方法

  - 移除对 saveCacheIndex 的调用
  - 使用 file-system-cache 的 setSync 方法保存缓存条目
  - 保持现有的依赖哈希计算逻辑
  - 添加适当的错误处理
  - _需求: 1.4, 2.4, 5.3_

- [x] 7. 重构 cleanupExpiredCache 方法

  - 使用 file-system-cache 的 keys 方法获取所有缓存键
  - 遍历所有条目检查时间戳
  - 使用 removeSync 方法删除过期条目
  - 添加批量操作的错误处理
  - _需求: 3.3, 5.3_

- [x] 8. 重构 getCacheStats 方法

  - 使用 file-system-cache 的 keys 方法获取条目数量
  - 遍历条目获取时间戳统计信息
  - 实现 calculateCacheSize 私有方法
  - 保持相同的返回结构
  - _需求: 2.5, 3.4_

- [x] 9. 重构 clearAllCache 方法

  - 使用 file-system-cache 的 clear 方法
  - 简化实现并添加错误处理
  - 移除手动目录删除逻辑
  - _需求: 2.5, 5.3_

- [x] 10. 移除不再需要的私有方法

  - 删除 loadCacheIndex 方法
  - 删除 saveCacheIndex 方法
  - 删除 saveCacheEntry 方法
  - 清理相关的导入和类型定义
  - _需求: 1.1_

- [x] 11. 更新单元测试

  - 修改现有的 CacheManager 测试用例
  - 测试新的缓存键生成逻辑
  - 测试 file-system-cache 集成
  - 添加错误处理场景的测试
  - _需求: 2.1, 5.1, 5.2, 5.3_

- [x] 12. 验证功能完整性

  - 运行所有相关测试确保功能正常
  - 验证缓存文件名的可读性
  - 确认 API 接口保持不变
  - 测试错误处理和边界情况
  - _需求: 2.1, 4.2, 5.4_
