"use strict";

import * as React from 'react';
import Animated from 'react-native-reanimated';
import { Path } from 'react-native-svg';
import { LineChartDimensionsContext } from './Chart';
import { LineChartPathContext } from './LineChartPathContext';
import { useAnimatedPath } from './useAnimatedPath';
import { jsx as _jsx } from "react/jsx-runtime";
const AnimatedPath = Animated.createAnimatedComponent(Path);
LineChartPath.displayName = 'LineChartPath';
export function LineChartPath({
  color = 'black',
  inactiveColor,
  width: strokeWidth = 3,
  ...props
}) {
  const {
    path
  } = React.useContext(LineChartDimensionsContext);
  const {
    isTransitionEnabled,
    isInactive
  } = React.useContext(LineChartPathContext);
  const {
    animatedProps
  } = useAnimatedPath({
    enabled: isTransitionEnabled,
    path
  });
  return /*#__PURE__*/_jsx(AnimatedPath, {
    animatedProps: animatedProps,
    fill: "transparent",
    stroke: isInactive ? inactiveColor || color : color,
    strokeOpacity: isInactive && !inactiveColor ? 0.2 : 1,
    strokeWidth: strokeWidth,
    ...props
  });
}
//# sourceMappingURL=Path.js.map