/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
export function checkNested(obj, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

export function createIfNotExist(object, value, ...keys) {
  let obj = object;
  const last = keys.splice(-1, 1)[0];
  for (const key of keys) {
    obj[key] = obj[key] || {};
    obj = obj[key];
  }
  obj[last] = value;
}

export function emptyObject(obj) {
  return Object.keys(obj).length === 0;
}

export function emptyIfNotExist(object, ...keys) {
  let obj = object;
  for (const i of keys) {
    if (!obj || !obj.hasOwnProperty(i)) { return {}; }
    obj = obj[i];
  }
  return obj;
}
