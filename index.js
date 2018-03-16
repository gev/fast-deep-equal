
var isArray = Array.isArray;
var keyList = Object.keys;

function equal(a, b) {
  if (a === b) return true;

  var arrA = isArray(a)
    , arrB = isArray(b)
    , i
    , length
    , key;

  if (arrA && arrB) {
    length = a.length;
    if (length != b.length) return false;
    for (i = 0; i < length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = 0; i < length; i++) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
}

function contains(a, b) {
  var keys = keyList(b)
    , key;

  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    if (!equal(a[key], b[key])) return false;
  }

  return true;
}

module.exports = { equal, contains };
