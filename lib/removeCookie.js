/**
 * Remove cookie.
 *
 * @since 0.1.0
 * @param {String} key Cookie name.
 *
 * @example
 * removeCookie('testCookie')
 */
function removeCookie(key) {
  document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export default removeCookie;