"use strict";

import React from 'react';
import { Svg } from 'react-native-svg';
import { CandlestickChartDimensionsContext } from './Chart';
import { CandlestickChartCandle } from './Candle';
import { useCandlestickChart } from './useCandlestickChart';
import { jsx as _jsx } from "react/jsx-runtime";
export function CandlestickChartCandles({
  positiveColor,
  negativeColor,
  rectProps,
  lineProps,
  margin,
  useAnimations = true,
  renderRect,
  renderLine,
  candleProps,
  ...props
}) {
  const {
    width,
    height
  } = React.useContext(CandlestickChartDimensionsContext);
  const {
    data,
    domain,
    step
  } = useCandlestickChart();
  return /*#__PURE__*/_jsx(Svg, {
    width: width,
    height: height,
    ...props,
    children: step > 0 && data.map((candle, index) => /*#__PURE__*/_jsx(CandlestickChartCandle, {
      domain: domain,
      margin: margin,
      maxHeight: height,
      width: step,
      positiveColor: positiveColor,
      negativeColor: negativeColor,
      renderRect: renderRect,
      renderLine: renderLine,
      rectProps: rectProps,
      lineProps: lineProps,
      useAnimations: useAnimations,
      candle: candle,
      index: index,
      ...candleProps
    }, index))
  });
}
//# sourceMappingURL=Candles.js.map