function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 在全局设置变量
 * @param name
 * @param data
 */
export function setGlobal(name, data) {
  // 浏览器环境
  if (typeof window !== 'undefined') {
    if (!window[name]) {
      window[name] = {};
    }
    window[name] = _objectSpread(_objectSpread({}, window[name]), data);
  } else {
    // node 环境, 用于预渲染
    if (!global[name]) {
      global[name] = {};
    }
    global[name] = _objectSpread(_objectSpread({}, global[name]), data);
  }
}

/**
 * 获取全局数据
 * 可传多个参数, 获取不到返回 undefined
 * @param names
 * @returns
 */
export function getGlobal() {
  var obj = typeof window !== 'undefined' ? window : global;
  for (var i = 0; i < arguments.length; i++) {
    var name = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!obj[name]) {
      return;
    }
    obj = obj[name];
  }
  return obj;
}

/**
 * 删除全局变量中的字体
 * 参数可以传多个, 只删除最后一个字段
 * @param names
 * @returns
 */
export function delGlobal() {
  var obj = typeof window !== 'undefined' ? window : global;
  for (var i = 0; i < arguments.length; i++) {
    var name = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (!obj[name]) {
      return;
    }

    // 最后一个字段是要删除的
    if (i === arguments.length - 1) {
      delete obj[name];
    }
    obj = obj[name];
  }
}