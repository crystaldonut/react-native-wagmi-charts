"use strict";

import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Line as SVGLine } from 'react-native-svg';
import { jsx as _jsx } from "react/jsx-runtime";
export const CandlestickChartLine = ({
  color = 'gray',
  x,
  y,
  ...props
}) => {
  return /*#__PURE__*/_jsx(Svg, {
    style: StyleSheet.absoluteFill,
    children: /*#__PURE__*/_jsx(SVGLine, {
      x1: 0,
      y1: 0,
      x2: x,
      y2: y,
      strokeWidth: 2,
      stroke: color,
      strokeDasharray: "6 6",
      ...props
    })
  });
};
//# sourceMappingURL=Line.js.map