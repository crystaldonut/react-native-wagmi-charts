"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getY = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
const getY = ({
  value,
  domain,
  maxHeight
}) => {
  'worklet';

  return (0, _reactNativeReanimated.interpolate)(value, domain, [maxHeight, 0], _reactNativeReanimated.Extrapolation.CLAMP);
};
exports.getY = getY;
//# sourceMappingURL=getY.js.map