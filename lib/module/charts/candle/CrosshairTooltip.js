"use strict";

import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { CandlestickChartDimensionsContext } from './Chart';
import { useCandlestickChart } from './useCandlestickChart';
import { CandlestickChartPriceText } from './PriceText';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const CandlestickChartCrosshairTooltipContext = /*#__PURE__*/React.createContext({
  position: {
    value: 'left'
  }
});
export function CandlestickChartCrosshairTooltip({
  children,
  xGutter = 8,
  yGutter = 8,
  tooltipTextProps,
  textStyle,
  ...props
}) {
  const {
    width,
    height
  } = React.useContext(CandlestickChartDimensionsContext);
  const {
    currentY
  } = useCandlestickChart();
  const {
    position
  } = React.useContext(CandlestickChartCrosshairTooltipContext);
  const elementHeight = useSharedValue(0);
  const elementWidth = useSharedValue(0);
  const handleLayout = React.useCallback(event => {
    elementHeight.value = event.nativeEvent.layout.height;
    elementWidth.value = event.nativeEvent.layout.width;
  }, [elementHeight, elementWidth]);
  const topOffset = useDerivedValue(() => {
    let offset = 0;
    if (currentY.value < elementHeight.value / 2 + yGutter) {
      offset = currentY.value - (elementHeight.value / 2 + yGutter);
    } else if (currentY.value + elementHeight.value / 2 > height - yGutter) {
      offset = currentY.value + elementHeight.value / 2 - height + yGutter;
    }
    return offset;
  }, [currentY, elementHeight, height, yGutter]);
  const tooltip = useAnimatedStyle(() => ({
    backgroundColor: 'white',
    position: 'absolute',
    display: 'flex',
    padding: 4
  }), []);
  const leftTooltip = useAnimatedStyle(() => ({
    left: xGutter,
    top: -(elementHeight.value / 2) - topOffset.value,
    opacity: position.value === 'left' ? 1 : 0
  }), [elementHeight, position, topOffset, xGutter]);
  const rightTooltip = useAnimatedStyle(() => ({
    left: width - elementWidth.value - xGutter,
    top: -(elementHeight.value / 2) - topOffset.value,
    opacity: position.value === 'right' ? 1 : 0
  }), [elementHeight, elementWidth, position, topOffset, width, xGutter]);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Animated.View, {
      onLayout: handleLayout,
      ...props,
      style: [tooltip, leftTooltip, props.style],
      children: children || /*#__PURE__*/_jsx(CandlestickChartPriceText, {
        ...tooltipTextProps,
        style: [styles.text, tooltipTextProps?.style, textStyle]
      })
    }), /*#__PURE__*/_jsx(Animated.View, {
      ...props,
      style: [tooltip, rightTooltip, props.style],
      children: children || /*#__PURE__*/_jsx(CandlestickChartPriceText, {
        ...tooltipTextProps,
        style: [styles.text, tooltipTextProps?.style, textStyle]
      })
    })]
  });
}
const styles = StyleSheet.create({
  text: {
    fontSize: 14
  }
});
//# sourceMappingURL=CrosshairTooltip.js.map