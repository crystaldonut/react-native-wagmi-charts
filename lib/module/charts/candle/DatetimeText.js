"use strict";

import React from 'react';
import { useCandlestickChartDatetime } from './useDatetime';
import { AnimatedText } from '../../components/AnimatedText';
import { jsx as _jsx } from "react/jsx-runtime";
export function CandlestickChartDatetimeText({
  locale,
  options,
  format,
  variant = 'formatted',
  style
}) {
  const datetime = useCandlestickChartDatetime({
    format,
    locale,
    options
  });
  return /*#__PURE__*/_jsx(AnimatedText, {
    text: datetime[variant],
    style: style
  });
}
//# sourceMappingURL=DatetimeText.js.map