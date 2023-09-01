function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function normalizeTreeItem(item, titleKey, valueKey, options) {
  var _ref = options || {},
    parentKey = _ref.parentKey,
    icon = _ref.icon,
    isTop = _ref.isTop;
  if (item.children) {
    return _objectSpread(_objectSpread({}, item), {}, {
      key: item[valueKey],
      title: item[titleKey],
      nodeId: parentKey,
      isTop: isTop,
      icon: icon,
      children: item.children.map(function (child) {
        return normalizeTreeItem(child, titleKey, valueKey, {
          parentKey: item[valueKey],
          icon: icon
        });
      })
    });
  }
  return _objectSpread(_objectSpread({}, item), {}, {
    key: item[valueKey],
    title: item[titleKey],
    nodeId: parentKey,
    isTop: isTop
  });
}

/**
 * 规范化tree的数据, 可以指定title和key的取值字段.
 * 同时给每个节点增加nodeId字段, 方便取父节点id
 * 增加isTop字段, 判断是不是第一级
 */
export function normalizeTree(treeData, options) {
  var _ref2 = options || {},
    _ref2$titleKey = _ref2.titleKey,
    titleKey = _ref2$titleKey === void 0 ? 'title' : _ref2$titleKey,
    _ref2$valueKey = _ref2.valueKey,
    valueKey = _ref2$valueKey === void 0 ? 'id' : _ref2$valueKey,
    icon = _ref2.icon;
  return treeData.map(function (row) {
    return normalizeTreeItem(row, titleKey, valueKey, {
      parentKey: '',
      icon: icon || row.icon,
      isTop: true
    });
  });
}
function normalizeTreeSelectItem(item, titleKey, valueKey) {
  if (item.children) {
    return _objectSpread(_objectSpread({}, item), {}, {
      value: item[valueKey],
      title: item[titleKey],
      children: item.children.map(function (child) {
        return normalizeTreeSelectItem(child, titleKey, valueKey);
      })
    });
  }
  return _objectSpread(_objectSpread({}, item), {}, {
    value: item[valueKey],
    title: item[titleKey]
  });
}

/**
 * 规范化treeSelect的数据, 可以指定title和value的取值字段.
 * treeSelect和上文的tree的数据结构不一样, 一个是key, 一个是value
 */
export function normalizeTreeSelect(treeData, options) {
  var _ref3 = options || {},
    _ref3$titleKey = _ref3.titleKey,
    titleKey = _ref3$titleKey === void 0 ? 'label' : _ref3$titleKey,
    _ref3$valueKey = _ref3.valueKey,
    valueKey = _ref3$valueKey === void 0 ? 'id' : _ref3$valueKey;
  return treeData.map(function (row) {
    return normalizeTreeSelectItem(row, titleKey, valueKey);
  });
}
/**
 * 规范化select的数据, 可以指定label和value的取值字段, 也可以传入renderLabel函数自定显示文本
 *
 */
export function normalizeSelect() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 ? arguments[1] : undefined;
  var _ref4 = options || {},
    _ref4$labelKey = _ref4.labelKey,
    labelKey = _ref4$labelKey === void 0 ? 'name' : _ref4$labelKey,
    _ref4$valueKey = _ref4.valueKey,
    valueKey = _ref4$valueKey === void 0 ? 'id' : _ref4$valueKey,
    renderLabel = _ref4.renderLabel;
  return data.map(function (row) {
    var label;
    if (renderLabel) {
      label = renderLabel(row);
    } else {
      label = row[labelKey];
    }
    return {
      label: label,
      value: row[valueKey]
    };
  });
}
function withDisabledItem(item, func) {
  if (item.children) {
    return _objectSpread(_objectSpread({}, item), {}, {
      disabled: func && func(item),
      children: item.children.map(function (child) {
        return withDisabledItem(child, func);
      })
    });
  }
  return _objectSpread(_objectSpread({}, item), {}, {
    disabled: func && func(item)
  });
}

/**
 * 这个一个装饰器函数, 用于给treeData的每一个节点添加disabled属性
 * 这样通过传入一个函数就可以控制节点是否为disabled
 * 函数的参数是node(节点)
 */
export function withDisabled(treeData, func) {
  if (!func) return treeData;
  return treeData.map(function (row) {
    return withDisabledItem(row, func);
  });
}
function withCheckableItem(item, func) {
  if (item.children) {
    return _objectSpread(_objectSpread({}, item), {}, {
      checkable: func && func(item),
      children: item.children.map(function (child) {
        return withCheckableItem(child, func);
      })
    });
  }
  return _objectSpread(_objectSpread({}, item), {}, {
    checkable: func && func(item)
  });
}

/**
 * 这个一个装饰器函数, 用于给treeData的每一个节点添加checkable属性
 * 这样通过传入一个函数就可以控制节点是否为可勾选
 * 函数的参数是node(节点)
 */
export function withCheckable(treeData, func) {
  if (!func) return treeData;
  return treeData.map(function (row) {
    return withCheckableItem(row, func);
  });
}

/**
 * 遍历tree, 找到目标节点, 找不到返回undefined
 */
export function findTreeItem() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var valueKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var result;

  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < data.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    var target = findTreeItemLoop(data[i], key, valueKey);
    if (target) {
      result = target;
      break;
    }
  }
  return result;
}
function findTreeItemLoop(data, key, valueKey) {
  if (data[valueKey] === key) {
    return data;
  }
  if (data.children && data.children.length) {
    return findTreeItem(data.children, key, valueKey);
  }
  return undefined;
}