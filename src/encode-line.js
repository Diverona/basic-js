const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let curr = "";

  for (let i = 0; i < str.length; i++) {
    curr += str[i];

    if (str[i + 1] !== str[i]) {
      res += curr.length === 1 ? curr : curr.length.toString() + curr[0];
      curr = "";
    }
  }

  return res;
}

module.exports = {
  encodeLine,
};
