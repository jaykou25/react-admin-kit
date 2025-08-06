type BaseInnerType = {
  /**
   * @zh-Hans 可以存储一些额外数据
   */
  data: Record<string, any>;

  /**
   * @zh-Hans 存入数据; setData 和 react 的 setState 一样, 只需要传入关心的字段就可以, 不会覆盖其它的字段。
   */
  setData: (values: Record<string, any>) => void;
};

export type SchemaFormInnerRefType = BaseInnerType;

export type BaseInnerRef = React.MutableRefObject<
  SchemaFormInnerRefType | undefined
>;

/** 产生一个 innerRef 的基本对象 */
export function CreateBaseInner(): BaseInnerType {
  const base = {
    data: {},
    setData: (values) => {
      Object.keys(values).forEach((key) => {
        base.data[key] = values[key];
      });
    },
  };
  return base;
}
