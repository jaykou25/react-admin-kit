import type { SelectProps } from 'antd';
import { Select } from 'antd';
import { isEqual } from 'lodash-es';
import { Component } from 'react';
import { getGlobal, setGlobal } from 'react-admin-kit/utils';
import { SelectName, SelectStatusName, SelectTotalName } from '..';
import { normalizeSelect } from '../../utils/tree';

export interface BaseSelectProps extends SelectProps<any> {
  type: string;
  loadFunction: (params?: any) => Promise<any>;
  valueKey?: string;
  labelKey?: string;
  renderLabel?: (node: any) => string;
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

        if (onLoad) {
          onLoad(res.data, res.total);
        }

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
      labelKey = 'name',
      valueKey = 'id',
      renderLabel,
      onChange,
      queryParams,
      noCache,
      showSearch,
      optionFilterProp,
      allowClear,
      ...rest
    } = this.props;

    // 默认值
    const _showSearch = showSearch !== undefined ? showSearch : true;
    const _optionFilterProp =
      optionFilterProp !== undefined ? optionFilterProp : 'label';
    const _allowClear = allowClear !== undefined ? allowClear : true;

    return (
      <Select
        {...rest}
        loading={this.state.loading}
        /**
         * antd的options除了label和value以外不能传入其它的值, 否则会有警告
         * 通过覆写onChange, 把数据源中的整行信息都赋给option. onChange(val, option)
         */
        onChange={this.handleOnChange}
        options={normalizeSelect(this.state.dataSource, {
          labelKey,
          valueKey,
          renderLabel,
        })}
        // 搜索部分
        showSearch={_showSearch}
        optionFilterProp={_optionFilterProp}
        allowClear={_allowClear}
      />
    );
  }
}

export default BaseSelect;
