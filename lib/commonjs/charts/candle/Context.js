"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandlestickChartContext = void 0;
exports.CandlestickChartProvider = CandlestickChartProvider;
var _react = _interopRequireDefault(require("react"));
var _reactNativeReanimated = require("react-native-reanimated");
var _getDomain = require("./utils/getDomain");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CandlestickChartContext = exports.CandlestickChartContext = /*#__PURE__*/_react.default.createContext({
  currentX: {
    value: -1
  },
  currentY: {
    value: -1
  },
  currentIndex: {
    value: -1
  },
  data: [],
  height: 0,
  width: 0,
  domain: [0, 0],
  step: 0,
  setWidth: () => undefined,
  setHeight: () => undefined
});
function CandlestickChartProvider({
  children,
  data = [],
  valueRangeY,
  onCurrentIndexChange
}) {
  const [width, setWidth] = _react.default.useState(0);
  const [height, setHeight] = _react.default.useState(0);
  const currentX = (0, _reactNativeReanimated.useSharedValue)(-1);
  const currentY = (0, _reactNativeReanimated.useSharedValue)(-1);
  const currentIndex = (0, _reactNativeReanimated.useSharedValue)(-1);
  const domain = _react.default.useMemo(() => valueRangeY ?? (0, _getDomain.getDomain)(data), [data, valueRangeY]);
  const step = _react.default.useMemo(() => width / data.length, [data.length, width]);
  const contextValue = _react.default.useMemo(() => ({
    currentX,
    currentY,
    currentIndex,
    data,
    width,
    height,
    domain,
    step,
    setWidth,
    setHeight
  }), [currentIndex, currentX, currentY, data, domain, height, step, width]);
  (0, _reactNativeReanimated.useAnimatedReaction)(() => currentIndex.value, (x, prevX) => {
    if (x !== prevX && onCurrentIndexChange) {
      (0, _reactNativeReanimated.runOnJS)(onCurrentIndexChange)(x);
    }
  }, [currentIndex]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CandlestickChartContext.Provider, {
    value: contextValue,
    children: children
  });
}
CandlestickChartProvider.displayName = 'CandlestickChartProvider';
//# sourceMappingURL=Context.js.map