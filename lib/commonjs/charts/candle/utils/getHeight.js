"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeight = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
const getHeight = ({
  value,
  domain,
  maxHeight
}) => {
  'worklet';

  return (0, _reactNativeReanimated.interpolate)(value, [0, Math.max(...domain) - Math.min(...domain)], [0, maxHeight], _reactNativeReanimated.Extrapolation.CLAMP);
};
exports.getHeight = getHeight;
//# sourceMappingURL=getHeight.js.map