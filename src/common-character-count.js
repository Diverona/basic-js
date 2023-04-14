const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;

  let s1Arr = s1.split("");
  let s2Arr = s2.split("");

  for (let i = 0; i < s1Arr.length; i++) {
    let index = s2Arr.indexOf(s1Arr[i]);

    if (index !== -1) {
      commonCount++;
      s2Arr.splice(index, 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
