import { interpolate, Extrapolation } from 'react-native-reanimated';
export const getY = ({
  value,
  domain,
  maxHeight
}) => {
  'worklet';

  return interpolate(value, domain, [maxHeight, 0], Extrapolation.CLAMP);
};
//# sourceMappingURL=getY.js.map