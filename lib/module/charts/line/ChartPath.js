"use strict";

import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Svg, Defs, ClipPath, Rect, G } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import flattenChildren from 'react-keyed-flatten-children';
import { LineChartDimensionsContext } from './Chart';
import { LineChartPathContext } from './LineChartPathContext';
import { LineChartPath } from './Path';
import { useLineChart } from './useLineChart';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const BACKGROUND_COMPONENTS = ['LineChartHighlight', 'LineChartHorizontalLine', 'LineChartGradient', 'LineChartDot', 'LineChartTooltip'];
const FOREGROUND_COMPONENTS = ['LineChartHighlight', 'LineChartDot'];
const AnimatedSVG = Animated.createAnimatedComponent(Svg);
const AnimatedRect = Animated.createAnimatedComponent(Rect);
LineChartPathWrapper.displayName = 'LineChartPathWrapper';
export function LineChartPathWrapper({
  animationDuration = 300,
  animationProps = {},
  children,
  color = 'black',
  inactiveColor,
  width: strokeWidth = 3,
  widthOffset = 20,
  pathProps = {},
  showInactivePath = true,
  animateOnMount,
  mountAnimationDuration = animationDuration,
  mountAnimationProps = animationProps
}) {
  const {
    height,
    pathWidth,
    width
  } = React.useContext(LineChartDimensionsContext);
  const {
    currentX,
    isActive
  } = useLineChart();
  const isMounted = useSharedValue(false);
  const hasMountedAnimation = useSharedValue(false);
  React.useEffect(() => {
    isMounted.value = true;
    return () => {
      isMounted.value = false;
    };
  }, []);

  ////////////////////////////////////////////////

  const clipId = React.useMemo(() => `clip-foreground-${Math.random().toString(36).substring(2, 11)}`, []);
  const clipProps = useAnimatedProps(() => {
    const shouldAnimateOnMount = animateOnMount === 'foreground';
    const inactiveWidth = !isMounted.value && shouldAnimateOnMount ? 0 : pathWidth;
    let duration = shouldAnimateOnMount && !hasMountedAnimation.value ? mountAnimationDuration : animationDuration;
    const props = shouldAnimateOnMount && !hasMountedAnimation.value ? mountAnimationProps : animationProps;
    if (isActive.value) {
      duration = 0;
    }
    return {
      width: withTiming(isActive.value ?
      // on Web, <svg /> elements don't support negative widths
      // https://github.com/coinjar/react-native-wagmi-charts/issues/24#issuecomment-955789904
      Math.max(currentX.value, 0) : inactiveWidth + widthOffset, Object.assign({
        duration
      }, props), () => {
        hasMountedAnimation.value = true;
      })
    };
  }, [animateOnMount, animationDuration, animationProps, currentX, hasMountedAnimation, isActive, isMounted, mountAnimationDuration, mountAnimationProps, pathWidth, widthOffset]);
  const viewSize = React.useMemo(() => ({
    width,
    height
  }), [width, height]);

  ////////////////////////////////////////////////

  let backgroundChildren;
  let foregroundChildren;
  if (children) {
    const iterableChildren = flattenChildren(children);
    backgroundChildren = iterableChildren.filter(child => BACKGROUND_COMPONENTS.includes(child?.type?.displayName || ''));
    foregroundChildren = iterableChildren.filter(child => FOREGROUND_COMPONENTS.includes(child?.type?.displayName || ''));
  }

  ////////////////////////////////////////////////

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(LineChartPathContext.Provider, {
      value: {
        color,
        isInactive: showInactivePath,
        isTransitionEnabled: pathProps.isTransitionEnabled ?? true
      },
      children: /*#__PURE__*/_jsxs(View, {
        style: viewSize,
        children: [/*#__PURE__*/_jsx(Svg, {
          width: width,
          height: height,
          children: /*#__PURE__*/_jsx(LineChartPath, {
            color: color,
            inactiveColor: inactiveColor,
            width: strokeWidth,
            ...pathProps
          })
        }), /*#__PURE__*/_jsx(Svg, {
          style: StyleSheet.absoluteFill,
          children: backgroundChildren
        })]
      })
    }), /*#__PURE__*/_jsx(LineChartPathContext.Provider, {
      value: {
        color,
        isInactive: false,
        isTransitionEnabled: pathProps.isTransitionEnabled ?? true
      },
      children: /*#__PURE__*/_jsx(View, {
        style: StyleSheet.absoluteFill,
        children: Platform.OS === 'web' ? /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsxs(Svg, {
            width: width,
            height: height,
            children: [/*#__PURE__*/_jsx(Defs, {
              children: /*#__PURE__*/_jsx(ClipPath, {
                id: clipId,
                children: /*#__PURE__*/_jsx(AnimatedRect, {
                  x: 0,
                  y: 0,
                  animatedProps: clipProps,
                  height: height
                })
              })
            }), /*#__PURE__*/_jsx(G, {
              clipPath: `url(#${clipId})`,
              children: /*#__PURE__*/_jsx(LineChartPath, {
                color: color,
                width: strokeWidth,
                ...pathProps
              })
            })]
          }), /*#__PURE__*/_jsx(Svg, {
            width: width,
            height: height,
            style: StyleSheet.absoluteFill,
            children: /*#__PURE__*/_jsx(G, {
              clipPath: `url(#${clipId})`,
              children: foregroundChildren
            })
          })]
        }) : /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx(AnimatedSVG, {
            animatedProps: clipProps,
            height: height,
            children: /*#__PURE__*/_jsx(LineChartPath, {
              color: color,
              width: strokeWidth,
              ...pathProps
            })
          }), /*#__PURE__*/_jsx(AnimatedSVG, {
            animatedProps: clipProps,
            height: height,
            style: StyleSheet.absoluteFill,
            children: foregroundChildren
          })]
        })
      })
    })]
  });
}
//# sourceMappingURL=ChartPath.js.map