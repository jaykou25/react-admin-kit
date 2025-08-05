# ProTable 测试用例

本目录包含了 ProTable 组件的各种测试用例，用于验证组件的核心功能。

## 测试用例列表

### 1. default-hide-in-search.test.jsx

测试 ProTable 的 `defaultHideInSearch` 属性功能：

- 验证默认情况下搜索字段的显示行为
- 验证 `defaultHideInSearch` 设为 true 时的行为
- 验证 `hideInSearch` 属性的优先级
- 验证 `type: 'search'` 的最高优先级

### 2. innerRef.test.jsx

测试 ProTable 的 `innerRef` 功能：

- 验证 innerRef 的正确初始化
- 验证请求成功后 innerRef 数据属性的设置
- 验证 openModal 方法的存在
- 验证 setData 方法的功能
- 验证不同请求参数下 params 的更新

### 3. on-open-async/ (新增)

测试 ProTable 的 `onOpen` 属性的异步行为：

#### 测试场景：

1. **异步函数 loading 状态测试**

   - 验证当 onOpen 为异步函数时，弹窗确认按钮正确显示 loading 状态
   - 验证异步操作完成后，loading 状态正确消失

2. **异步函数异常处理测试**

   - 验证当 onOpen 异步函数抛出异常时，loading 状态能正确关闭
   - 确保异常不会导致 UI 状态异常

3. **同步函数测试**

   - 验证当 onOpen 为同步函数时，确认按钮不显示 loading 状态

4. **无回调函数测试**

   - 验证不传 onOpen 时，弹窗正常打开且确认按钮无 loading 状态

5. **取消弹窗测试**
   - 验证在异步函数执行过程中可以正常取消弹窗

#### 技术实现：

- 使用 ModalForm 组件进行测试，因为 ProTable 内部使用 ModalForm 处理弹窗
- 使用 `forceRender: true` 确保弹窗在测试环境中正确渲染
- 使用 `waitFor` 和适当的超时时间处理异步操作
- 通过 CSS 类名检查按钮的 loading 状态

## 运行测试

```bash
# 运行所有 ProTable 测试用例
pnpm test src/ProTable/cases/

# 运行特定测试用例
pnpm test src/ProTable/cases/on-open-async/index.test.jsx
```

## 注意事项

1. 测试用例使用 `@jest-environment jsdom` 环境
2. 所有测试都包含了必要的 mock 数据和请求函数
3. 异步测试使用了合适的等待机制，避免测试不稳定
4. 测试覆盖了正常流程和异常流程，确保组件的健壮性
