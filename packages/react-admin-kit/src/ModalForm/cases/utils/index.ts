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
