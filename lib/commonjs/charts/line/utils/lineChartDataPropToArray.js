"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineChartDataPropToArray = void 0;
const lineChartDataPropToArray = dataProp => {
  'worklet';

  if (!dataProp) {
    return [];
  }
  if (Array.isArray(dataProp)) {
    return dataProp;
  }
  const data = [];
  Object.values(dataProp).forEach(dataSet => {
    if (dataSet) {
      data.push(...dataSet);
    }
  });
  return data;
};
exports.lineChartDataPropToArray = lineChartDataPropToArray;
//# sourceMappingURL=lineChartDataPropToArray.js.map