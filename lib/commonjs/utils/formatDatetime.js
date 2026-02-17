"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDatetime = void 0;
/**
 * @worklet
 */
const formatDatetime = ({
  value,
  locale = 'en-US',
  options = {}
}) => {
  'worklet';

  const d = new Date(value);
  return d.toLocaleString(locale, options);
};
exports.formatDatetime = formatDatetime;
//# sourceMappingURL=formatDatetime.js.map