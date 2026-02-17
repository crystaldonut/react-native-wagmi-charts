"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChartDatetimeText = LineChartDatetimeText;
var _react = _interopRequireDefault(require("react"));
var _reactNativeReanimated = require("react-native-reanimated");
var _useDatetime = require("./useDatetime");
var _AnimatedText = require("../../components/AnimatedText");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
LineChartDatetimeText.displayName = 'LineChartDatetimeText';
function LineChartDatetimeText({
  locale,
  options,
  format,
  variant = 'formatted',
  style
}) {
  const datetime = (0, _useDatetime.useLineChartDatetime)({
    format,
    locale,
    options
  });
  const text = (0, _reactNativeReanimated.useDerivedValue)(() => {
    const value = datetime[variant].value;
    if (typeof value === 'number') {
      return value === 0 || isNaN(value) ? '' : value.toString();
    }
    return value || '';
  }, [datetime, variant]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnimatedText.AnimatedText, {
    text: text,
    style: style
  });
}
//# sourceMappingURL=DatetimeText.js.map