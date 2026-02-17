"use strict";

import React from 'react';
import { useCandlestickChartPrice } from './usePrice';
import { AnimatedText } from '../../components/AnimatedText';
import { jsx as _jsx } from "react/jsx-runtime";
export function CandlestickChartPriceText({
  format,
  precision = 2,
  variant = 'formatted',
  type = 'crosshair',
  style
}) {
  const price = useCandlestickChartPrice({
    format,
    precision,
    type
  });
  return /*#__PURE__*/_jsx(AnimatedText, {
    text: price[variant],
    style: style
  });
}
//# sourceMappingURL=PriceText.js.map