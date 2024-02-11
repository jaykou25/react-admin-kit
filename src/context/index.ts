export class BaseInnerClass {
  data: Record<string, any>;

  constructor() {
    this.data = {};
  }

  public setData(values: Record<string, any>) {
    this.data = { ...this.setData, ...values };
  }
}
