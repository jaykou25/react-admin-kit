var _excluded = ["embed", "readonly", "submitter", "columns", "valueBaseName", "initialValues", "onFinish", "formRef", "innerRef"];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { BetaSchemaForm } from '@ant-design/pro-form';
import { produce } from 'immer';
import React, { createRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Form, Row } from 'antd';
import { SchemaFormContext } from "../SettingProvider/context";
import { genItems } from "./genItems";
import { InnerRefContext } from "../ProForm";
import { convertValues, splitValues } from "./utils";

// 按照约定式格式重新包装 setFieldsValue 方法
import { jsx as _jsx } from "react/jsx-runtime";
export var setConvertedFieldsValue = function setConvertedFieldsValue(values, _ref) {
  var _ref$isInit = _ref.isInit,
    isInit = _ref$isInit === void 0 ? false : _ref$isInit,
    getFieldsValue = _ref.getFieldsValue,
    setFieldsValue = _ref.setFieldsValue,
    setInitialValuesInner = _ref.setInitialValuesInner;
  /**
   * 利用 getFieldsValue 来拿到表单所有的 fields
   * 需要调用两次才能拿全, 因为有的 field 是 valueType=dependency 生成的. final 为 true 时是最后一次
   * @param final 是否是最后一次
   * @returns
   */
  var setConverted = function setConverted() {
    var final = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var allVals = getFieldsValue(true, function () {
      return true;
    });
    var convertedVals = convertValues(values, allVals);
    if (isInit && final) {
      setInitialValuesInner(convertedVals);
      return;
    }
    setFieldsValue(convertedVals);
  };

  /**
   * 为什么要调两次?
   * 第一次只能拿到除dependency外其它的.
   * 第二次才能拿全, 而且第二次必须是异步的
   */
  setConverted();
  setTimeout(function () {
    return setConverted(true);
  }, 50);
};
var SchemaForm = function SchemaForm(props) {
  var _props$embed = props.embed,
    embed = _props$embed === void 0 ? false : _props$embed,
    _props$readonly = props.readonly,
    readonly = _props$readonly === void 0 ? false : _props$readonly,
    _props$submitter = props.submitter,
    submitter = _props$submitter === void 0 ? false : _props$submitter,
    _props$columns = props.columns,
    columns = _props$columns === void 0 ? [] : _props$columns,
    valueBaseName = props.valueBaseName,
    initialValues = props.initialValues,
    onFinish = props.onFinish,
    propsFormRef = props.formRef,
    innerRef = props.innerRef,
    rest = _objectWithoutProperties(props, _excluded);

  // 当 innerRef 不传时提供一个内部默认值, 保证 innerRef 不为空
  var selfInnerRef = /*#__PURE__*/createRef();
  selfInnerRef.current = {
    data: {},
    setData: function setData() {}
  };

  // 包装setFieldsValue方法, 用于约定式赋值
  var formRef = useRef();
  useImperativeHandle(propsFormRef, function () {
    if (!formRef.current) {
      return formRef.current;
    }
    var _formRef$current = formRef.current,
      getFieldsValue = _formRef$current.getFieldsValue,
      _setFieldsValue = _formRef$current.setFieldsValue;
    return _objectSpread(_objectSpread({}, formRef.current), {}, {
      setFieldsValue: function setFieldsValue(values) {
        return setConvertedFieldsValue(values, {
          getFieldsValue: getFieldsValue,
          setFieldsValue: _setFieldsValue
        });
      }
    });
  }, [!initialValues]);
  var setData = function setData(newValue) {
    if (innerRef !== null && innerRef !== void 0 && innerRef.current) {
      var values = innerRef.current.data;
      innerRef.current.data = _objectSpread(_objectSpread({}, values), newValue);
    }
  };

  /**
   * 给 innerRef 增加方法
   */
  useEffect(function () {
    if (innerRef) {
      if (!innerRef.current) innerRef.current = {
        data: {},
        setData: setData
      };

      /**
       * 给 ModalForm 组件的 innerRef 赋值
       */
      innerRef.current.data = {};
      innerRef.current.setData = setData;
    }
  }, []);

  /**
   * 截获了initialValues
   * 对initialValues进行约定式转化后再赋值
   */
  var _useState = useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    initialValuesInner = _useState2[0],
    setInitialValuesInner = _useState2[1];
  useEffect(function () {
    if (initialValues && formRef.current) {
      var _formRef$current2 = formRef.current,
        getFieldsValue = _formRef$current2.getFieldsValue,
        setFieldsValue = _formRef$current2.setFieldsValue;
      setConvertedFieldsValue(initialValues, {
        getFieldsValue: getFieldsValue,
        setFieldsValue: setFieldsValue,
        setInitialValuesInner: setInitialValuesInner,
        isInit: true
      });
    }
  }, []);
  useEffect(function () {
    if (initialValuesInner) {
      var _formRef$current3;
      (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 ? void 0 : _formRef$current3.resetFields();
    }
  }, [initialValuesInner]);

  /**
   * 全局默认设置
   */
  var setting = useContext(SchemaFormContext) || {};
  var handleOnFinish = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!onFinish) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", onFinish(splitValues(values)));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleOnFinish(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * 给 fieldProps 和 renderFormItem 注入 innerRef
   */
  var parentInnerRef = useContext(InnerRefContext);
  var patchColumn = function patchColumn($cols) {
    var _props$innerRef = props.innerRef,
      innerRef = _props$innerRef === void 0 ? selfInnerRef : _props$innerRef;

    /**
     * 父组件 ProForm 中传入的 innerRef 优先级最高
     */
    var $innerRef = parentInnerRef || innerRef;
    return produce($cols, function (cols) {
      cols.forEach(function (col) {
        var renderFormItem = col.renderFormItem,
          fieldProps = col.fieldProps,
          valueType = col.valueType,
          columns = col.columns;

        // 给fieldProps增加ref参数
        if (fieldProps && typeof fieldProps === 'function') {
          col.fieldProps = function (form) {
            return fieldProps(form, $innerRef);
          };
        }

        // 给renderFormItem增加ref参数
        if (renderFormItem) {
          col.renderFormItem = function (a, b, c) {
            return renderFormItem(a, b, c, $innerRef);
          };
        }

        // 处理 columns 的套嵌, 例如 valueType 为 group
        if (columns && Array.isArray(columns)) {
          col.columns = patchColumn(columns);
        }

        // 处理 dependency 的套嵌
        if (valueType === 'dependency' && columns && typeof columns === 'function') {
          col.columns = function (values) {
            return patchColumn(columns(values));
          };
        }
      });
    });
  };

  /**
   * embed模式下只是用来生成formItem项, 所以不需要传任何Form的属性
   */
  var formInstance = Form.useFormInstance();
  if (embed) {
    var grid = props.grid,
      rowProps = props.rowProps,
      colProps = props.colProps,
      labelCol = props.labelCol;
    if (grid) {
      return /*#__PURE__*/_jsx(Row, _objectSpread(_objectSpread({}, rowProps), {}, {
        children: genItems(patchColumn(columns), 'form', formInstance, {
          labelCol: labelCol,
          valueBaseName: valueBaseName,
          colProps: colProps,
          grid: grid,
          readonly: readonly
        })
      }));
    }
    return genItems(patchColumn(columns), 'form', formInstance, {
      labelCol: labelCol,
      valueBaseName: valueBaseName,
      readonly: readonly
    });
  }

  /**
   * 在原来的 submitter dom 上增加一层 div, 方便在 div 上增加样式
   */
  var patchSubmitter = function patchSubmitter() {
    if (_typeof(submitter) === 'object') {
      var render = submitter.render,
        _submitter$style = submitter.style,
        style = _submitter$style === void 0 ? {} : _submitter$style;
      if (render) {
        return submitter;
      } else {
        submitter.render = function (options, dom) {
          return /*#__PURE__*/_jsx("div", {
            style: _objectSpread({
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }, style),
            children: dom
          });
        };
        return submitter;
      }
    }
    return submitter;
  };
  return /*#__PURE__*/_jsx(BetaSchemaForm, _objectSpread(_objectSpread(_objectSpread({}, setting), {}, {
    onFinish: handleOnFinish,
    submitter: patchSubmitter(),
    formRef: formRef,
    readonly: readonly,
    initialValues: initialValuesInner
  }, rest), {}, {
    columns: patchColumn(columns),
    layoutType: 'Form'
  }));
};
export default SchemaForm;

// 用于生成api文档
export var SchemaFormType = function SchemaFormType() {
  return null;
};