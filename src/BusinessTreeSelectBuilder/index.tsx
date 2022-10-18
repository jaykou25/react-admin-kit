import { TreeSelect } from 'antd';
import { useEffect, useState } from 'react';
import { normalizeTreeSelect, withDisabled } from '../utils/tree';
import { BusinessTreeSelectBuilderProps, BusinessTreeSelectProps } from './types';

/**
 * 数据挂在window上作为缓存, 避免重复请求
 */
export const CacheName = '@@treeSelectData';
export const CacheStatusName = '@@treeSelectDataIsStart';

const BusinessTreeSelectBuilder = ({ apis = [] }: BusinessTreeSelectBuilderProps) => {
  /**
   * 初始化window挂载
   */
  window[CacheName] = {};
  window[CacheStatusName] = {};

  return (props: BusinessTreeSelectProps) => {
    const { type, style, value, onChange, nodeDisabled, valueKey, labelKey, ...rest } = props;

    const target = apis.find((item) => item.type === type);

    if (!target) return null;

    const [loading, setLoading] = useState(false);

    const [num, setNum] = useState(1);

    const defalutLabelKey = labelKey || target.labelKey || 'name';
    const defaultValueKey = valueKey || target.valueKey || 'id';

    useEffect(() => {
      if (target.noCache) {
        setLoading(true);
        target
          .api()
          .then((res) => {
            window[CacheName][type] = normalizeTreeSelect(res.data, {
              titleKey: defalutLabelKey,
              valueKey: defaultValueKey,
            });
          })
          .finally(() => {
            setLoading(false);
          });
        return;
      }

      // 以下为走缓存逻辑
      const reRender = () => {
        setNum((val) => val + 1);
        setLoading(false);
      };
      document.addEventListener('treeSelectGlobalUpdate', reRender);

      // 如果同时有多个请求, 后面的请求return掉
      if (window[CacheStatusName][type]) {
        setLoading(true);
        return;
      }

      window[CacheStatusName][type] = true;

      if (window[CacheName][type]) {
        return;
      }

      setLoading(true);
      target
        .api()
        .then((res) => {
          window[CacheName][type] = normalizeTreeSelect(res.data, {
            titleKey: defalutLabelKey,
            valueKey: defaultValueKey,
          });

          const event = new CustomEvent('treeSelectGlobalUpdate', { detail: { type } });
          document.dispatchEvent(event);
        })
        .finally(() => setLoading(false));
    }, []);

    return (
      <TreeSelect
        showSearch
        treeNodeFilterProp="title"
        allowClear
        placeholder="请选择"
        {...rest}
        style={{ width: '100%', ...style }}
        value={value}
        loading={loading}
        onChange={(val, label, extra) => {
          if (onChange) onChange(val, label, extra);
        }}
        treeData={withDisabled(window[CacheName][type] || [], nodeDisabled)}
      />
    );
  };
};

export default BusinessTreeSelectBuilder;
