"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandlestickChartCandles = CandlestickChartCandles;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = require("react-native-svg");
var _Chart = require("./Chart");
var _Candle = require("./Candle");
var _useCandlestickChart = require("./useCandlestickChart");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CandlestickChartCandles({
  positiveColor,
  negativeColor,
  rectProps,
  lineProps,
  margin,
  useAnimations = true,
  renderRect,
  renderLine,
  candleProps,
  ...props
}) {
  const {
    width,
    height
  } = _react.default.useContext(_Chart.CandlestickChartDimensionsContext);
  const {
    data,
    domain,
    step
  } = (0, _useCandlestickChart.useCandlestickChart)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Svg, {
    width: width,
    height: height,
    ...props,
    children: step > 0 && data.map((candle, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Candle.CandlestickChartCandle, {
      domain: domain,
      margin: margin,
      maxHeight: height,
      width: step,
      positiveColor: positiveColor,
      negativeColor: negativeColor,
      renderRect: renderRect,
      renderLine: renderLine,
      rectProps: rectProps,
      lineProps: lineProps,
      useAnimations: useAnimations,
      candle: candle,
      index: index,
      ...candleProps
    }, index))
  });
}
//# sourceMappingURL=Candles.js.map