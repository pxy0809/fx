import type from './type';

/**
 * 判断当前参数是否为 Boolean
 *
 * @function
 * @memberof Fx
 * @param {Any} obj 任意类型的数据
 * @returns {Boolean}
 * @example
 *
 * // -> true
 * Fx.isBoolean(true);
 *
 * // -> false
 * Fx.isBoolean([]);
 *
 * // -> false
 * Fx.isBoolean({});
 */
const isBoolean = (obj: any): boolean => {
  return obj === true || obj === false || type(obj) === 'boolean';
};
export default isBoolean;
