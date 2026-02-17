import { interpolate, Extrapolation } from 'react-native-reanimated';
export const getPrice = ({
  y,
  domain,
  maxHeight
}) => {
  'worklet';

  if (y === -1) return -1;
  return interpolate(y, [0, maxHeight], domain.reverse(), Extrapolation.CLAMP);
};
//# sourceMappingURL=getPrice.js.map