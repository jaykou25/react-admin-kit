# 增加多导入语句解析测试用例设计

## 概述

本设计针对 DependencyAnalyzer 类增加一个新的测试用例，用于验证该分析器能否正确处理包含多个导入语句的代码。具体需要处理的场景是：在同一段代码中包含多个 import 语句，分别为命名导入和默认导入。

## 当前测试覆盖情况分析

通过分析现有测试文件，DependencyAnalyzer 当前已覆盖以下场景：

| 测试场景 | 导入类型 | 预期结果 |
|---------|---------|---------|
| 默认导入 | `import React from 'react'` | 单个 NPM 依赖，default 类型 |
| 命名导入 | `import { Button, Input } from 'antd'` | 单个 NPM 依赖，named 类型 |
| 文件导入 | `import * as styles from './styles.module.css'` | 单个 FILE 依赖，namespace 类型 |
| 动态导入 | `React.lazy(() => import('./OtherComponent'))` | 单个 FILE 依赖，side-effect 类型 |
| 解析错误 | 语法错误的代码 | 空数组 |

## 新增测试用例需求

### 目标场景
需要添加对多个导入语句的处理能力验证，具体代码为：
```javascript
import { useContext } from 'react'; 
import App from './app';
```

### 预期行为分析

该代码包含两个独立的导入语句：

1. **第一个导入语句**：`import { useContext } from 'react'`
   - 类型：NPM 依赖
   - 源：`react`
   - 导入类型：命名导入 (named)
   - 导入内容：`['useContext']`

2. **第二个导入语句**：`import App from './app'`
   - 类型：FILE 依赖
   - 源：`./app`
   - 扩展名：`tsx` (默认推断)
   - 导入类型：默认导入 (default)
   - 导入内容：`['default']`

### 预期测试结果结构

```javascript
[
  {
    type: 'NPM',
    source: 'react',
    importType: 'named',
    imported: ['useContext'],
  },
  {
    type: 'FILE',
    source: './app',
    ext: 'tsx',
    importType: 'default',
    imported: ['default'],
  }
]
```

## DependencyAnalyzer 架构适配性

### 当前实现架构分析

DependencyAnalyzer 采用以下技术栈和处理流程：

1. **解析层**：使用 `@babel/parser` 将代码转换为 AST
2. **遍历层**：使用 `@babel/traverse` 遍历 AST 节点
3. **分析层**：针对不同类型的导入节点进行分析

### 多导入语句处理能力

通过分析源码可知，DependencyAnalyzer 的设计已经支持多导入语句的处理：

1. **ImportDeclaration 遍历**：traverse 函数会遍历所有的 ImportDeclaration 节点
2. **依赖收集机制**：每个导入语句都会被独立处理并添加到 dependencies 数组中
3. **类型判断逻辑**：对 NPM 包和文件路径的判断逻辑是独立的

因此，当前实现架构完全支持多导入语句的解析，无需修改核心逻辑。

## 测试用例设计

### 测试用例命名
```javascript
it('应该正确分析多个导入语句', () => {
  // 测试实现
});
```

### 测试数据准备
- **输入代码**：包含两个导入语句的字符串
- **预期结果**：包含两个依赖对象的数组

### 验证策略
- 验证返回数组长度为 2
- 验证第一个依赖对象的所有属性
- 验证第二个依赖对象的所有属性
- 确保依赖对象的顺序与导入语句顺序一致

## 测试覆盖率影响

### 覆盖范围扩展
新增测试用例将覆盖以下场景：
- 多语句解析能力
- NPM 和 FILE 依赖混合处理
- 命名导入和默认导入混合处理

### 代码路径覆盖
该测试用例将触发以下代码路径：
- ImportDeclaration 遍历器的多次执行
- NPM 依赖判断逻辑
- FILE 依赖判断逻辑
- 扩展名推断逻辑
- 依赖对象构建逻辑

## 质量保证策略

### 测试执行要求
- 测试必须通过 Jest 测试框架执行
- 测试结果必须为绿色（通过状态）
- 测试应当与现有测试保持一致的代码风格

### 边界条件考虑
虽然本次只添加一个特定用例，但设计时考虑了以下边界条件：
- 导入语句之间的空格和换行处理
- 不同类型导入的顺序敏感性
- 依赖数组的顺序保持

### 回归测试保障
新增测试用例不应影响现有测试的执行，所有现有测试必须保持通过状态。

## 实施方案

### 测试实现步骤
1. 在现有测试文件中添加新的 `it` 测试块
2. 准备包含两个导入语句的测试代码字符串
3. 调用 `analyzer.analyzeDependencies()` 方法
4. 使用 `expect().toEqual()` 验证结果
5. 运行测试确保通过

### 验收标准
- 新测试用例执行成功
- 所有现有测试保持通过状态
- 测试覆盖率得到提升
- 代码风格与现有测试保持一致