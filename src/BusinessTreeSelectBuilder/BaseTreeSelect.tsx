import { withDisabled, normalizeTreeSelect } from '../utils/tree';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
import { Component } from 'react';
import isEqual from 'lodash/isEqual';
import { CacheName, CacheStatusName } from './index';
import { BusinessTreeSelectProps } from './types';

export type BaseTreeSelectProps = BusinessTreeSelectProps<any> &
  TreeSelectProps<any> & {
    loadFunction: (params?: any) => Promise<any>;
  };

class BaseTreeSelect extends Component<BaseTreeSelectProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dataSource: window[CacheName][props.type] || [],
    };
  }

  reRender = (e) => {
    if (e.detail.type === this.props.type) {
      this.setState({
        loading: false,
        dataSource: window[CacheName][this.props.type] || [],
      });
      window[CacheStatusName][this.props.type] = false;
    }
  };

  componentDidMount() {
    this.handleLoadData();

    document.addEventListener('treeSelectGlobalUpdate', this.reRender);
  }

  componentWillUnmount(): void {
    document.removeEventListener('treeSelectGlobalUpdate', this.reRender);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.queryParams, this.props.queryParams)) {
      this.handleLoadData();
    }
  }

  handleLoadData = () => {
    const { queryParams = {}, noCache } = this.props;

    // queryParams为依赖列表, 依赖列表有值则不缓存
    if (Object.keys(queryParams).length > 0 || noCache) {
      this.loadDataWithoutCache();
    } else {
      this.loadDataForCache();
    }
  };

  loadDataForCache = () => {
    const { type, loadFunction, valueKey, labelKey } = this.props;

    // 如果同时有多个请求, 后面的请求return掉
    if (window[CacheStatusName][type]) {
      this.setState({ loading: true });
      return;
    }

    // 如果window.selectData中有数据则不请求后台
    // 同时对于依赖参数变化的请求不缓存
    if (window[CacheName][type]) {
      return;
    }

    window[CacheStatusName][type] = true;

    this.setState({ loading: true });
    loadFunction({})
      .then((res) => {
        window[CacheName][type] = normalizeTreeSelect(res, { titleKey: labelKey, valueKey });

        const event = new CustomEvent('treeSelectGlobalUpdate', { detail: { type } });
        document.dispatchEvent(event);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  loadDataWithoutCache = () => {
    const { loadFunction, queryParams, valueKey, labelKey } = this.props;

    this.setState({ loading: true });
    loadFunction(queryParams)
      .then((res) => {
        this.setState({
          dataSource: normalizeTreeSelect(res, { titleKey: labelKey, valueKey }),
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const {
      type,
      loadFunction,
      nodeDisabled,
      labelKey,
      valueKey,
      style = {},
      value,
      onChange,
      queryParams,
      noCache,
      ...rest
    } = this.props;

    return (
      <TreeSelect
        showSearch
        treeNodeFilterProp="title"
        allowClear
        placeholder="请选择"
        {...rest}
        style={{ width: '100%', ...style }}
        loading={this.state.loading}
        value={value}
        onChange={(val, label, extra) => {
          if (onChange) onChange(val, label, extra);
        }}
        treeData={withDisabled(this.state.dataSource || [], nodeDisabled)}
      />
    );
  }
}

export default BaseTreeSelect;
