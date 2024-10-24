var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/atoms/ToggleLightButton/index.tsx
import { Button } from "@chakra-ui/react";

// ../../node_modules/react-icons/lib/esm/iconBase.js
import React2 from "react";

// ../../node_modules/react-icons/lib/esm/iconContext.js
import React from "react";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);

// ../../node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return React2.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React2.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React2.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React2.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React2.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// ../../node_modules/react-icons/fa/index.esm.js
function FaMoon(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" } }] })(props);
}
function FaSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" } }] })(props);
}

// src/components/ui/color-mode.tsx
import { ThemeProvider, useTheme } from "next-themes";
import { jsx } from "react/jsx-runtime";
function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode
  };
}

// src/atoms/ToggleLightButton/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ToggleLightButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return /* @__PURE__ */ jsx2(
    Button,
    {
      onClick: toggleColorMode,
      variant: "ghost",
      "aria-label": "toggle light mode",
      children: colorMode === "dark" ? /* @__PURE__ */ jsx2(FaSun, {}) : /* @__PURE__ */ jsx2(FaMoon, {})
    }
  );
};

// src/atoms/IconButton/index.tsx
import { IconButton as Button2 } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { jsx as jsx3 } from "react/jsx-runtime";
var IconButton = (_a) => {
  var _b = _a, {
    iconPath,
    ariaLabel,
    title,
    iconSize = 1
  } = _b, rest = __objRest(_b, [
    "iconPath",
    "ariaLabel",
    "title",
    "iconSize"
  ]);
  return /* @__PURE__ */ jsx3(Button2, __spreadProps(__spreadValues({ "aria-label": ariaLabel, title }, rest), { children: /* @__PURE__ */ jsx3(Icon, { size: iconSize, path: iconPath }) }));
};

// src/atoms/Link/index.tsx
import { Link as CLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { jsx as jsx4 } from "react/jsx-runtime";
var Link = ({ to, children }) => {
  return /* @__PURE__ */ jsx4(CLink, { asChild: true, fontSize: "1.4rem", fontWeight: "bold", children: /* @__PURE__ */ jsx4(RouterLink, { to, children }) });
};

// src/molecules/ErrorBoundary/index.tsx
import { Box, Spinner, Text } from "@chakra-ui/react";
import { Suspense } from "react";

// ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// ../../node_modules/react-error-boundary/dist/react-error-boundary.esm.js
import * as React3 from "react";
var changedArray = function changedArray2(a, b) {
  if (a === void 0) {
    a = [];
  }
  if (b === void 0) {
    b = [];
  }
  return a.length !== b.length || a.some(function(item, index) {
    return !Object.is(item, b[index]);
  });
};
var initialState = {
  error: null
};
var ErrorBoundary = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(ErrorBoundary3, _React$Component);
  function ErrorBoundary3() {
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = initialState;
    _this.resetErrorBoundary = function() {
      var _this$props;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);
      _this.reset();
    };
    return _this;
  }
  ErrorBoundary3.getDerivedStateFromError = function getDerivedStateFromError(error) {
    return {
      error
    };
  };
  var _proto = ErrorBoundary3.prototype;
  _proto.reset = function reset() {
    this.setState(initialState);
  };
  _proto.componentDidCatch = function componentDidCatch(error, info) {
    var _this$props$onError, _this$props2;
    (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var error = this.state.error;
    var resetKeys = this.props.resetKeys;
    if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      var _this$props$onResetKe, _this$props3;
      (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);
      this.reset();
    }
  };
  _proto.render = function render() {
    var error = this.state.error;
    var _this$props4 = this.props, fallbackRender = _this$props4.fallbackRender, FallbackComponent = _this$props4.FallbackComponent, fallback = _this$props4.fallback;
    if (error !== null) {
      var _props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ React3.isValidElement(fallback)) {
        return fallback;
      } else if (typeof fallbackRender === "function") {
        return fallbackRender(_props);
      } else if (FallbackComponent) {
        return /* @__PURE__ */ React3.createElement(FallbackComponent, _props);
      } else {
        throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
      }
    }
    return this.props.children;
  };
  return ErrorBoundary3;
}(React3.Component);

// src/molecules/ErrorBoundary/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var ErrorBoundary2 = ({ children, message }) => {
  return /* @__PURE__ */ jsx5(
    ErrorBoundary,
    {
      fallback: /* @__PURE__ */ jsx5(Box, { height: "140px", textAlign: "center", children: /* @__PURE__ */ jsx5(Text, { children: message }) }),
      children: /* @__PURE__ */ jsx5(
        Suspense,
        {
          fallback: /* @__PURE__ */ jsx5(Box, { height: "140px", textAlign: "center", children: /* @__PURE__ */ jsx5(Spinner, {}) }),
          children
        }
      )
    }
  );
};

// src/components/ui/checkbox.tsx
import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import { forwardRef } from "react";
import { jsx as jsx6, jsxs } from "react/jsx-runtime";
var Checkbox = forwardRef(
  function Checkbox2(props, ref) {
    const _a = props, { icon, children, inputProps, rootRef } = _a, rest = __objRest(_a, ["icon", "children", "inputProps", "rootRef"]);
    return /* @__PURE__ */ jsxs(ChakraCheckbox.Root, __spreadProps(__spreadValues({ ref: rootRef }, rest), { children: [
      /* @__PURE__ */ jsx6(ChakraCheckbox.HiddenInput, __spreadValues({ ref }, inputProps)),
      /* @__PURE__ */ jsx6(ChakraCheckbox.Control, { children: icon || /* @__PURE__ */ jsx6(ChakraCheckbox.Indicator, {}) }),
      children != null && /* @__PURE__ */ jsx6(ChakraCheckbox.Label, { children })
    ] }));
  }
);

// src/molecules/Selectable/SelectableProvider.tsx
import { createContext, useContext, useState as useState2 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SelectableContext = createContext(
  void 0
);
var SelectableProvider = ({
  children,
  initialValue
}) => {
  const [selectedItems, setSelectedItems] = useState2(
    initialValue || []
  );
  const toggleItem = (item) => {
    console.log(selectedItems);
    if (selectedItems.includes(item)) {
      setSelectedItems(
        (prev) => prev.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
  };
  const contextValue = {
    selectedItems,
    toggleItem
  };
  return /* @__PURE__ */ jsx7(SelectableContext.Provider, { value: contextValue, children });
};
var useSelectableConsumer = () => {
  const context = useContext(SelectableContext);
  if (context === void 0) {
    throw new Error(
      "useSelectableConsumer must be used within a SelectableProvider"
    );
  }
  return context;
};

// src/molecules/Selectable/SelectableItem.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var SelectableItem = ({ children, item }) => {
  const { toggleItem, selectedItems } = useSelectableConsumer();
  return /* @__PURE__ */ jsx8(
    Checkbox,
    {
      isChecked: selectedItems.includes(item),
      onChange: () => toggleItem(item),
      children
    }
  );
};

// src/molecules/Selectable/SelectableList.tsx
import { VStack } from "@chakra-ui/react";
import { jsx as jsx9 } from "react/jsx-runtime";
var SelectableList = ({ children }) => {
  return /* @__PURE__ */ jsx9(VStack, { pl: 6, mt: 1, gap: 1, align: "stretch", children });
};

// src/organisms/Nav/index.tsx
import { Flex as Flex2, useDisclosure } from "@chakra-ui/react";

// ../../node_modules/@mdi/js/mdi.js
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiHamburger = "M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z";

// src/organisms/Nav/MobileMenu.tsx
import { Flex } from "@chakra-ui/react";
import { jsx as jsx10, jsxs as jsxs2 } from "react/jsx-runtime";
var MobileMenu = ({ children, close, isOpen }) => {
  return /* @__PURE__ */ jsxs2(
    Flex,
    {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "0",
      minH: "100vh",
      minW: { sm: 64, base: "100%" },
      paddingY: 12,
      pr: 24,
      pl: 10,
      flexDirection: "column",
      gap: 2,
      bgColor: "gray.700",
      display: isOpen ? "flex" : "none",
      zIndex: 10,
      children: [
        children,
        /* @__PURE__ */ jsx10(
          IconButton,
          {
            position: "absolute",
            ariaLabel: "collapse-menu",
            iconPath: mdiClose,
            top: "1em",
            right: "2em",
            onClick: close
          }
        )
      ]
    }
  );
};

// src/organisms/Nav/index.tsx
import { Fragment, jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var Nav = ({ children }) => {
  const { onOpen, open, onClose } = useDisclosure();
  return /* @__PURE__ */ jsxs3(Fragment, { children: [
    /* @__PURE__ */ jsxs3(Wrapper, { display: { base: "none", md: "flex" }, children: [
      children,
      /* @__PURE__ */ jsx11(ToggleLightButton, {})
    ] }),
    /* @__PURE__ */ jsxs3(Wrapper, { display: { base: "flex", md: "none" }, children: [
      /* @__PURE__ */ jsx11(MobileMenu, { close: onClose, isOpen: open, children }),
      /* @__PURE__ */ jsx11(
        IconButton,
        {
          ariaLabel: "toggle-menu",
          iconPath: mdiHamburger,
          onClick: onOpen
        }
      )
    ] })
  ] });
};
var Wrapper = (_a) => {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ jsx11(
    Flex2,
    __spreadProps(__spreadValues({
      justifyContent: "flex-end",
      alignItems: "center",
      px: "2em",
      py: "0.5em",
      gap: "1em"
    }, rest), {
      children
    })
  );
};

// src/theme.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";
var theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Roboto', sans-serif` },
        body: { value: `'Roboto', sans-serif` }
      }
    }
  }
});
export {
  ErrorBoundary2 as ErrorBoundary,
  IconButton,
  Link,
  Nav,
  SelectableItem,
  SelectableList,
  SelectableProvider,
  ToggleLightButton,
  theme,
  useSelectableConsumer
};
