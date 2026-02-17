"use strict";

import * as React from 'react';
import Animated from 'react-native-reanimated';
import { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { LineChartDimensionsContext } from './Chart';
import { LineChartPathContext } from './LineChartPathContext';
import { useAnimatedPath } from './useAnimatedPath';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const AnimatedPath = Animated.createAnimatedComponent(Path);
let id = 0;
LineChartGradient.displayName = 'LineChartGradient';
export function LineChartGradient({
  color: overrideColor = undefined,
  children,
  ...props
}) {
  const {
    area
  } = React.useContext(LineChartDimensionsContext);
  const {
    color: contextColor,
    isTransitionEnabled
  } = React.useContext(LineChartPathContext);
  const color = overrideColor || contextColor;

  ////////////////////////////////////////////////

  const {
    animatedProps
  } = useAnimatedPath({
    enabled: isTransitionEnabled,
    path: area
  });

  ////////////////////////////////////////////////

  const localId = React.useRef(++id);

  ////////////////////////////////////////////////

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [children ? /*#__PURE__*/_jsx(Defs, {
      children: /*#__PURE__*/_jsx(LinearGradient, {
        id: `${localId.current}`,
        x1: "0",
        x2: "0",
        y1: "0",
        y2: "100%",
        children: children
      })
    }) : /*#__PURE__*/_jsx(Defs, {
      children: /*#__PURE__*/_jsxs(LinearGradient, {
        id: `${localId.current}`,
        x1: "0",
        x2: "0",
        y1: "0",
        y2: "100%",
        children: [/*#__PURE__*/_jsx(Stop, {
          offset: "20%",
          stopColor: color,
          stopOpacity: 0.15
        }), /*#__PURE__*/_jsx(Stop, {
          offset: "40%",
          stopColor: color,
          stopOpacity: 0.05
        }), /*#__PURE__*/_jsx(Stop, {
          offset: "100%",
          stopColor: color,
          stopOpacity: 0
        })]
      })
    }), /*#__PURE__*/_jsx(AnimatedPath, {
      animatedProps: animatedProps,
      fill: `url(#${localId.current})`,
      ...props
    })]
  });
}
//# sourceMappingURL=Gradient.js.map