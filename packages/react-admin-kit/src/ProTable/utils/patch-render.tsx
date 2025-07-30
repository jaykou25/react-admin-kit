import produce from 'immer';
import { Space } from 'antd';
import type { FormColumnType } from '../../SchemaForm/types';
import type { TableColumnType } from '../types';

/**
 * 增加 render 函数
 *  1. 给 option 列增加 innerRef
 *  2. option 列的 renderDom 包裹 Space 组件
 */
export const patchRender = (columns, { innerRef, spaceProps }): any => {
  return produce(columns, (cols) => {
    cols.forEach(
      (col: Omit<FormColumnType, 'render'> & TableColumnType['render']) => {
        const { render } = col;

        // 给 valueType 为 option 列的 render 增加 ref 参数
        if (col.valueType === 'option' && render) {
          col.render = (text, record, index, action) => {
            const renderDom = render(text, record, index, action, innerRef);

            //数组的话外面包一个 Space 组件
            return Array.isArray(renderDom) ? (
              <Space {...spaceProps}>{renderDom}</Space>
            ) : (
              renderDom
            );
          };
        }
      },
    );
  });
};
