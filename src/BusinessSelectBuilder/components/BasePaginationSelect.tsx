import { normalizeSelect } from '@/utils/tree';
import { Select } from 'antd';
import { Component } from 'react';
import { connect } from 'umi';
import { debounce } from 'lodash';
import isEqual from 'lodash/isEqual';
import type { BaseSelectProps } from './BaseSelect';

/**
 * 分页选择组件
 *
 */
class BasePaginationSelect extends Component<BaseSelectProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: window.selectData[props.type] || [],
      total: window.selectDataTotal[props.type] || 0,
      loading: false,
      searchValue: '',
      current: 1,
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
        this.setState({
          dataSource: res.data,
          total: res.total,
        });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  getTotal = () => {
    if (this.isNoCache()) {
      return this.state.total;
    }

    return window.selectDataTotal[this.props.type];
  };

  // 恢复初始状态
  reset = () => {
    const { type } = this.props;

    this.setState({
      searchValue: undefined,
      dataSource: window.selectData[type] || [],
      total: window.selectDataTotal[type],
      current: 1,
    });

    // bugfix: 针对没缓存的需要重新获取数据
    this.handleLoadData();
  };

  handleOnChange = (val) => {
    const { onChange, valueKey = 'id', labelInValue } = this.props;

    // 如果是点的clear
    if (!val) {
      this.reset();

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

  // 下一页
  handleUpdateData = () => {
    const { current, searchValue, dataSource } = this.state;
    this.setState({ loading: true });
    this.props.loadFunction({ current, searchValue }).then((res) => {
      this.setState({
        dataSource: dataSource.concat(res.data),
        loading: false,
        total: res.total,
      });
    });
  };

  handleSearchData = () => {
    const { searchValue } = this.state;
    this.setState({ loading: true });
    this.props.loadFunction({ current: 1, searchValue }).then((res) => {
      this.setState({
        dataSource: res.data,
        loading: false,
        total: res.total,
      });
    });
  };

  handlePopupScroll = (e) => {
    e.persist();
    const { target } = e;
    const { current } = this.state;
    if (this.toBottomNeedLoad(target)) {
      this.setState(
        {
          current: current + 1,
        },
        this.handleUpdateData,
      );
    }
  };

  toBottomNeedLoad = (target) => {
    const { dataSource, loading } = this.state;
    return !loading && this.toBottom(target) && dataSource.length < this.getTotal();
  };

  toBottom = (target) => {
    return target.scrollTop + target.clientHeight + 10 > target.scrollHeight;
  };

  handleSearch = (value) => {
    if (value) {
      this.setState({ searchValue: value, current: 1 }, () => this.handleSearchData());
      return;
    }

    // 没值的话恢复初始状态
    this.reset();
  };

  render() {
    const {
      globalUpdate,
      dispatch,
      type,
      loadFunction,
      labelKey,
      valueKey,
      renderLabel,
      onChange,
      queryParams,
      ...rest
    } = this.props;

    return (
      <Select
        {...rest}
        placeholder="请选择"
        loading={this.state.loading}
        onChange={this.handleOnChange}
        options={normalizeSelect(this.state.dataSource, { labelKey, valueKey, renderLabel })}
        // 搜索部分
        showSearch
        allowClear
        filterOption={false}
        onPopupScroll={this.handlePopupScroll}
        onSearch={debounce(this.handleSearch, 500)}
      />
    );
  }
}

export default connect((state: any) => ({
  globalUpdate: state.global.globalUpdate,
}))(BasePaginationSelect);
