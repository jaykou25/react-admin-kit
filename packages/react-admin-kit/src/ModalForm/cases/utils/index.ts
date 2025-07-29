/**
 * 在测试 antd Modal 组件弹窗开启并闭时，由于开启关闭有 css 动画, 导制测试不稳定。
 * 在 ModalForm 组件中，由于功能需要，forceRender 是设为 true 的。以下是行为方式：
 *
 * 遮罩层：
 * 1. 开启
 * .ant-modal-wrap(display: none) -> .ant-modal-mask.ant-fade.ant-fade-enter.ant-fade-enter-active -> .ant-modal-mask
 *
 * 2. 关闭
 * .ant-modal-mask -> .ant-modal-mask.ant-fade.ant-fade-leave.ant-fade-leave-active -> .ant-modal-wrap(display: none)
 *
 * modal 层：
 * 1. 开启
 * .ant-modal(display: none) -> .ant-modal.ant-zoom.ant-zoom-enter.ant-zoom-enter-active -> .ant-modal
 *
 * 2. 关闭
 * .ant-modal -> .ant-modal.ant-zoom.ant-zoom-leave.ant-zoom-leave-active -> .ant-modal(display: none)
 */

export function isModalClosing(container) {
  // 检查遮罩层是否处于离开状态
  const maskIsLeaving = !!container.querySelector(
    '.ant-modal-mask.ant-fade-leave',
  );

  // 检查Modal本身是否处于离开状态
  const modalIsLeaving = !!container.querySelector('.ant-modal.ant-zoom-leave');

  // 只有当遮罩层和Modal本身都处于离开状态时，才认为Modal正在关闭
  return maskIsLeaving && modalIsLeaving;
}

export function isModalShowing(container) {
  // 检查遮罩层是否处于离开状态
  const maskShowing = !!container.querySelector(
    '.ant-modal-mask.ant-fade-enter',
  );

  // 检查Modal本身是否处于离开状态
  const modalShowing = !!container.querySelector('.ant-modal.ant-zoom-enter');

  // 只有当遮罩层和Modal本身都处于离开状态时，才认为Modal正在关闭
  return maskShowing && modalShowing;
}

// 判断 modal 关闭状态
export function isModalHidden(container) {
  const wrap = container.querySelector('.ant-modal-wrap');
  const warpHidden = !!wrap && wrap.style.display === 'none';

  const modal = container.querySelector('.ant-modal');
  const modalHidden = !!modal && modal.style.display === 'none';

  return warpHidden && modalHidden;
}
