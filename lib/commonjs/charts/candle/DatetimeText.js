"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandlestickChartDatetimeText = CandlestickChartDatetimeText;
var _react = _interopRequireDefault(require("react"));
var _useDatetime = require("./useDatetime");
var _AnimatedText = require("../../components/AnimatedText");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CandlestickChartDatetimeText({
  locale,
  options,
  format,
  variant = 'formatted',
  style
}) {
  const datetime = (0, _useDatetime.useCandlestickChartDatetime)({
    format,
    locale,
    options
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AnimatedText.AnimatedText, {
    text: datetime[variant],
    style: style
  });
}
//# sourceMappingURL=DatetimeText.js.map