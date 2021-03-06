/**
 * Chober.js - is a collection of useful methods that are used by programmers every day.
 * We decided to put all the methods together so as not to copy them from project to project.
 *
 * @author Valery Strelets
 * @see https://github.com/BrooonS/chober
 * @license https://github.com/BrooonS/chober/blob/master/LICENSE
 */

import { version } from './package';

/**
 * Import all methods.
 */
import isEmpty from './lib/isEmpty';
import isArray from './lib/isArray';
import isNumber from './lib/isNumber';
import isString from './lib/isString';
import isObject from './lib/isObject';
import isBoolean from './lib/isBoolean';
import isEqual from './lib/isEqual';
import isUndefined from './lib/isUndefined';
import isNil from './lib/isNil';
import isFunction from './lib/isFunction';
import getQuery from './lib/getQuery';
import getScrollbarWidth from './lib/getScrollbarWidth';
import getCookie from './lib/getCookie';
import getOffset from './lib/getOffset';
import getType from './lib/getType';
import groupBy from './lib/groupBy';
import setQuery from './lib/setQuery';
import setCookie from './lib/setCookie';
import removeCookie from './lib/removeCookie';
import clone from './lib/clone';
import flattenDeep from './lib/flattenDeep';
import formatNumber from './lib/formatNumber';
import formatQuery from './lib/formatQuery';
import scrollTo from './lib/scrollTo';
import uniq from './lib/uniq';

/**
 * Set version to constant.
 *
 * @constant
 */
const VERSION = version;

/**
 * Export one module with all methods.
 */
export default {
  VERSION,
  isEmpty,
  isArray,
  isNumber,
  isString,
  isObject,
  isBoolean,
  isEqual,
  isUndefined,
  isNil,
  isFunction,
  getQuery,
  getScrollbarWidth,
  getCookie,
  getOffset,
  getType,
  groupBy,
  setQuery,
  setCookie,
  removeCookie,
  clone,
  flattenDeep,
  formatNumber,
  formatQuery,
  scrollTo,
  uniq,
};
