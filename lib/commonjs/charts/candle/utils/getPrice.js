"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrice = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
const getPrice = ({
  y,
  domain,
  maxHeight
}) => {
  'worklet';

  if (y === -1) return -1;
  return (0, _reactNativeReanimated.interpolate)(y, [0, maxHeight], domain.reverse(), _reactNativeReanimated.Extrapolation.CLAMP);
};
exports.getPrice = getPrice;
//# sourceMappingURL=getPrice.js.map