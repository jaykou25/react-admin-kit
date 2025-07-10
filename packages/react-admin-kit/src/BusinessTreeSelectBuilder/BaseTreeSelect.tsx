import type { TreeSelectProps } from 'antd';
import { TreeSelect } from 'antd';
import isEqual from 'lodash/isEqual';
import { Component } from 'react';
import { getGlobal, setGlobal } from 'react-admin-kit/utils';
import { normalizeTreeSelect, withDisabled } from '../utils/tree';
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
      dataSource: getGlobal(CacheName, props.type) || [],
    };
  }

  reRender = (e) => {
    if (e.detail.type === this.props.type && !this.isNoCache()) {
      this.setState({
        loading: false,
        dataSource: getGlobal(CacheName, this.props.type) || [],
      });
      setGlobal(CacheStatusName, { [this.props.type]: false });

      if (this.props.onLoad) {
        this.props.onLoad(getGlobal(CacheName, this.props.type) || []);
      }
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

  // 判断是不是不要缓存
  isNoCache = () => {
    // queryParams为依赖列表, 依赖列表有值则不缓存
    const { queryParams = {}, noCache } = this.props;
    return Object.keys(queryParams).length > 0 || noCache;
  };

  handleLoadData = () => {
    if (this.isNoCache()) {
      this.loadDataWithoutCache();
    } else {
      this.loadDataForCache();
    }
  };

  loadDataForCache = () => {
    const {
      type,
      loadFunction,
      valueKey = 'id',
      labelKey = 'name',
      onLoad,
    } = this.props;

    // 如果同时有多个请求, 后面的请求return掉
    if (getGlobal(CacheStatusName, type)) {
      this.setState({ loading: true });
      return;
    }

    // 如果window.selectData中有数据则不请求后台
    // 同时对于依赖参数变化的请求不缓存
    if (getGlobal(CacheName, type)) {
      if (onLoad) {
        onLoad(getGlobal(CacheName, type));
      }
      return;
    }

    setGlobal(CacheStatusName, { [type]: true });

    this.setState({ loading: true });
    loadFunction({})
      .then((res) => {
        setGlobal(CacheName, {
          [type]: normalizeTreeSelect(res, {
            titleKey: labelKey,
            valueKey,
          }),
        });

        if (onLoad) {
          onLoad(
            normalizeTreeSelect(res, {
              titleKey: labelKey,
              valueKey,
            }),
          );
        }

        const event = new CustomEvent('treeSelectGlobalUpdate', {
          detail: { type },
        });
        document.dispatchEvent(event);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  loadDataWithoutCache = () => {
    const {
      loadFunction,
      queryParams,
      valueKey = 'id',
      labelKey = 'name',
      onLoad,
    } = this.props;

    this.setState({ loading: true });
    loadFunction(queryParams)
      .then((res) => {
        this.setState({
          dataSource: normalizeTreeSelect(res, {
            titleKey: labelKey,
            valueKey,
          }),
        });

        if (onLoad) {
          onLoad(
            normalizeTreeSelect(res, {
              titleKey: labelKey,
              valueKey,
            }),
          );
        }
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const {
      labelKey,
      valueKey,
      type,
      loadFunction,
      nodeDisabled,
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
