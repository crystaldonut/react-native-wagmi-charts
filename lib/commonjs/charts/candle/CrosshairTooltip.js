"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandlestickChartCrosshairTooltip = CandlestickChartCrosshairTooltip;
exports.CandlestickChartCrosshairTooltipContext = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _Chart = require("./Chart");
var _useCandlestickChart = require("./useCandlestickChart");
var _PriceText = require("./PriceText");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CandlestickChartCrosshairTooltipContext = exports.CandlestickChartCrosshairTooltipContext = /*#__PURE__*/_react.default.createContext({
  position: {
    value: 'left'
  }
});
function CandlestickChartCrosshairTooltip({
  children,
  xGutter = 8,
  yGutter = 8,
  tooltipTextProps,
  textStyle,
  ...props
}) {
  const {
    width,
    height
  } = _react.default.useContext(_Chart.CandlestickChartDimensionsContext);
  const {
    currentY
  } = (0, _useCandlestickChart.useCandlestickChart)();
  const {
    position
  } = _react.default.useContext(CandlestickChartCrosshairTooltipContext);
  const elementHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  const elementWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  const handleLayout = _react.default.useCallback(event => {
    elementHeight.value = event.nativeEvent.layout.height;
    elementWidth.value = event.nativeEvent.layout.width;
  }, [elementHeight, elementWidth]);
  const topOffset = (0, _reactNativeReanimated.useDerivedValue)(() => {
    let offset = 0;
    if (currentY.value < elementHeight.value / 2 + yGutter) {
      offset = currentY.value - (elementHeight.value / 2 + yGutter);
    } else if (currentY.value + elementHeight.value / 2 > height - yGutter) {
      offset = currentY.value + elementHeight.value / 2 - height + yGutter;
    }
    return offset;
  }, [currentY, elementHeight, height, yGutter]);
  const tooltip = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    backgroundColor: 'white',
    position: 'absolute',
    display: 'flex',
    padding: 4
  }), []);
  const leftTooltip = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    left: xGutter,
    top: -(elementHeight.value / 2) - topOffset.value,
    opacity: position.value === 'left' ? 1 : 0
  }), [elementHeight, position, topOffset, xGutter]);
  const rightTooltip = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    left: width - elementWidth.value - xGutter,
    top: -(elementHeight.value / 2) - topOffset.value,
    opacity: position.value === 'right' ? 1 : 0
  }), [elementHeight, elementWidth, position, topOffset, width, xGutter]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      onLayout: handleLayout,
      ...props,
      style: [tooltip, leftTooltip, props.style],
      children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_PriceText.CandlestickChartPriceText, {
        ...tooltipTextProps,
        style: [styles.text, tooltipTextProps?.style, textStyle]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      ...props,
      style: [tooltip, rightTooltip, props.style],
      children: children || /*#__PURE__*/(0, _jsxRuntime.jsx)(_PriceText.CandlestickChartPriceText, {
        ...tooltipTextProps,
        style: [styles.text, tooltipTextProps?.style, textStyle]
      })
    })]
  });
}
const styles = _reactNative.StyleSheet.create({
  text: {
    fontSize: 14
  }
});
//# sourceMappingURL=CrosshairTooltip.js.map