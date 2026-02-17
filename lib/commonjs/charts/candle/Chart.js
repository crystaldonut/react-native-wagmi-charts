"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandlestickChart = CandlestickChart;
exports.CandlestickChartDimensionsContext = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useCandlestickChart = require("./useCandlestickChart");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CandlestickChartDimensionsContext = exports.CandlestickChartDimensionsContext = /*#__PURE__*/_react.default.createContext({
  width: 0,
  height: 0
});
const {
  width: screenWidth
} = _reactNative.Dimensions.get('window');
function CandlestickChart({
  children,
  width = screenWidth,
  height = screenWidth,
  ...props
}) {
  const {
    setWidth,
    setHeight
  } = (0, _useCandlestickChart.useCandlestickChart)();
  _react.default.useEffect(() => {
    setWidth(width);
    setHeight(height);
  }, [height, setHeight, setWidth, width]);
  const contextValue = _react.default.useMemo(() => ({
    width,
    height
  }), [height, width]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CandlestickChartDimensionsContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      ...props,
      children: children
    })
  });
}
//# sourceMappingURL=Chart.js.map