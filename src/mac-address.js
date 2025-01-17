const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 17) return false;

  // Перевіряємо, чи розділитель є '-'
  let arr = n.split("-");
  if (arr.length !== 6) return false;

  str = arr.join("");

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (
      !(charCode >= 48 && charCode <= 57) &&
      !(charCode >= 65 && charCode <= 70) &&
      !(charCode >= 97 && charCode <= 102)
    ) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isMAC48Address,
};
