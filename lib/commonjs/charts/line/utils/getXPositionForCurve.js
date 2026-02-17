"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getXPositionForCurve = void 0;
const getXPositionForCurve = (path, index) => {
  'worklet';

  if (index === 0) {
    return path.move.x;
  }
  const point = path.curves[index - 1];
  if (point === undefined) {
    throw new Error(`Index out of bounds: ${index}. ` + `Expected an integer in the range [0, ${path.curves.length}]`);
  }
  return point.to.x;
};
exports.getXPositionForCurve = getXPositionForCurve;
//# sourceMappingURL=getXPositionForCurve.js.map