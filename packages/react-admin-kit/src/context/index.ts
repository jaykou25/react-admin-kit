type BaseInnerType = {
  data: Record<string, any>;
  setData: (values: Record<string, any>) => void;
};

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
