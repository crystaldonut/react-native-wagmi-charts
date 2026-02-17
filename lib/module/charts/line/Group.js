"use strict";

import React, { Children, cloneElement } from 'react';
import { View } from 'react-native';
import flattenChildren from 'react-keyed-flatten-children';
import { LineChart } from './Chart';
import { jsx as _jsx } from "react/jsx-runtime";
export function LineChartGroup({
  children,
  ...props
}) {
  const flatChildren = flattenChildren(children);
  const flatChildrenCount = Children.count(flatChildren);
  return /*#__PURE__*/_jsx(View, {
    ...props,
    children: Children.map(flatChildren, (child, index) => {
      const isLast = index === flatChildrenCount - 1;
      if (!isLast && /*#__PURE__*/React.isValidElement(child) && child.type === LineChart) {
        return /*#__PURE__*/cloneElement(child, {
          absolute: true
        });
      }
      return child;
    })
  });
}
//# sourceMappingURL=Group.js.map