import { normalizeSelect } from './tree';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { Component } from 'react';
import isEqual from 'lodash/isEqual';

export interface BaseSelectProps extends SelectProps<any> {
  dispatch?: any;
  globalUpdate?: { value: number; type: string };
  type: string;
  loadFunction: (params?: any) => Promise<any>;
  valueKey?: string;
  labelKey?: string;
  renderLabel?: (node: any) => string;
  newPlaceholder?: any;
  queryParams?: Record<string, any>;
  noCache?: boolean;
}

class BaseSelect extends Component<BaseSelectProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dataSource: window.selectData[props.type] || [],
    };
  }

  componentDidMount() {
    this.handleLoadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.globalUpdate.value !== this.props.globalUpdate?.value) {
      if (this.props.type === this.props.globalUpdate?.type) {
        this.setState({
          dataSource: window.selectData[this.props.type] || [],
          total: window.selectDataTotal[this.props.type] || 0,
        });
      }
    }

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
    const { type, loadFunction, dispatch } = this.props;

    // 如果同时有多个请求, 后面的请求return掉
    if (window.selectDataIsStart[type]) return;
    window.selectDataIsStart[type] = true;

    // 如果window.selectData中有数据则不请求后台
    // 同时对于依赖参数变化的请求不缓存
    if (window.selectData[type]) {
      return;
    }

    this.setState({ loading: true });
    loadFunction({})
      .then((res) => {
        window.selectData[type] = res.data;
        window.selectDataTotal[type] = res.total;
        dispatch({ type: 'global/globalUpdate', payload: type });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  loadDataWithoutCache = () => {
    const { loadFunction, queryParams } = this.props;

    this.setState({ loading: true });
    loadFunction(queryParams)
      .then((res) => {
        console.log('baseselect', res, this.props.type);
        this.setState({
          dataSource: res.data,
          total: res.total,
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleOnChange = (val) => {
    const { onChange, valueKey = 'id', labelInValue } = this.props;

    // 如果是点的clear
    if (!val) {
      if (onChange) {
        // @ts-ignore
        onChange(val, {});
      }
      return;
    }

    if (onChange) {
      onChange(
        val,
        this.state.dataSource.find((row) => {
          if (labelInValue) {
            return row[valueKey] === val?.value;
          }
          return row[valueKey] === val;
        }),
      );
    }
  };

  render() {
    const {
      type,
      loadFunction,
      labelKey,
      valueKey,
      renderLabel,
      onChange,
      newPlaceholder,
      queryParams,
      globalUpdate,
      dispatch,
      noCache,
      ...rest
    } = this.props;

    return (
      <Select
        {...rest}
        placeholder={newPlaceholder || '请选择'}
        loading={this.state.loading}
        /**
         * antd的options除了label和value以外不能传入其它的值, 否则会有警告
         * 通过覆写onChange, 把数据源中的整行信息都赋给option. onChange(val, option)
         */
        onChange={this.handleOnChange}
        options={normalizeSelect(this.state.dataSource, { labelKey, valueKey, renderLabel })}
        // 搜索部分
        showSearch
        optionFilterProp="label"
        allowClear
      />
    );
  }
}

export default BaseSelect;
