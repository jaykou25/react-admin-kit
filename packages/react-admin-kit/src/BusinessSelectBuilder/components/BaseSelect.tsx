import type { SelectProps } from 'antd';
import { Select } from 'antd';
import isEqual from 'lodash/isEqual';
import { Component } from 'react';
import { getGlobal, setGlobal } from '../../utils';
import { SelectName, SelectStatusName, SelectTotalName } from '..';

export interface BaseSelectProps extends SelectProps<any> {
  type: string;
  loadFunction: (params?: any) => Promise<any>;
  queryParams?: Record<string, any>;
  noCache?: boolean;
  onLoad?: (options, total?: number) => void;
  searchDebounceValue?: number;
}

class BaseSelect extends Component<BaseSelectProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dataSource: getGlobal(SelectName, props.type) || [],
    };
  }

  reRender = (e) => {
    if (e.detail.type === this.props.type && !this.isNoCache()) {
      this.setState({
        loading: false,
        dataSource: getGlobal(SelectName, this.props.type) || [],
        total: getGlobal(SelectTotalName, this.props.type) || 0,
      });

      if (this.props.onLoad) {
        this.props.onLoad(
          getGlobal(SelectName, this.props.type) || [],
          getGlobal(SelectTotalName, this.props.type) || 0,
        );
      }
      setGlobal(SelectStatusName, { [this.props.type]: false });
    }
  };

  componentDidMount() {
    this.handleLoadData();

    document.addEventListener('selectGlobalUpdate', this.reRender);
  }

  componentWillUnmount(): void {
    document.removeEventListener('selectGlobalUpdate', this.reRender);
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
    const { type, loadFunction, onLoad } = this.props;

    // 如果同时有多个请求, 后面的请求return掉
    if (getGlobal(SelectStatusName, type)) {
      this.setState({ loading: true });
      return;
    }

    // 如果window.selectData中有数据则不请求后台
    // 同时对于依赖参数变化的请求不缓存
    if (getGlobal(SelectName, type)) {
      if (onLoad) {
        onLoad(getGlobal(SelectName, type) || []);
      }
      return;
    }

    setGlobal(SelectStatusName, { [type]: true });

    this.setState({ loading: true });
    loadFunction({})
      .then((res) => {
        setGlobal(SelectName, { [type]: res.data });
        setGlobal(SelectTotalName, { [type]: res.total });

        const event = new CustomEvent('selectGlobalUpdate', {
          detail: { type },
        });
        document.dispatchEvent(event);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  loadDataWithoutCache = () => {
    const { loadFunction, queryParams = {}, onLoad } = this.props;

    this.setState({ loading: true });
    loadFunction(queryParams)
      .then((res) => {
        this.setState({
          dataSource: res.data,
          total: res.total,
        });

        if (onLoad) {
          onLoad(res.data, res.total);
        }
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const {
      type,
      loadFunction,
      queryParams,
      noCache,
      showSearch = true,
      optionFilterProp = 'label',
      filterOption = (inputValue, option) => {
        const { value = 'value', label = 'label' } =
          this.props.fieldNames || {};

        if (option) {
          const valueStr = (option[value] || '').toString().toLowerCase();
          const labelStr = (option[label] || '').toString().toLowerCase();
          return (
            valueStr.includes(inputValue.toLowerCase()) ||
            labelStr.includes(inputValue.toLowerCase())
          );
        } else {
          return false;
        }
      },
      allowClear = true,
      ...rest
    } = this.props;

    return (
      <Select
        {...rest}
        loading={this.state.loading}
        options={this.state.dataSource}
        // 搜索部分
        showSearch={showSearch}
        optionFilterProp={optionFilterProp}
        filterOption={filterOption}
        allowClear={allowClear}
      />
    );
  }
}

export default BaseSelect;
