// TODO: write your code here
function canIterate(obj) {
  if (obj == null) {
    return false;
  }
  const res = obj[Symbol.iterator] != null;
  return res;
}

// TODO: write your code in app.js
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate('Netology'); // true
