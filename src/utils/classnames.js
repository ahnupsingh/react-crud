/* */
export function classnames(...args) {
  if (!args.length) return "";
  let classes = "";

  for (let value of args) {
    if (typeof value === "string") classes += `${value} `;
    else if (typeof value === "object") {
      classes += `${_reduceObjectToString(value)} `;
    }
  }
  return classes.trimEnd();
}

/*
 * reduce object to string
 * ```js
 * _reduceObjectToString({foo: true, bar: false, bazz: true}) -> "foo bazz"
 * ```
 * `
 */
function _reduceObjectToString(obj) {
  let _str = "";

  for (let key in obj) {
    if (typeof obj[key] === "boolean" && obj[key] === true) _str += `${key} `;
  }
  return _str.trimEnd();
}
