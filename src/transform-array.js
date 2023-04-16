const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  let copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === "--discard-next") {
      if (copyArr[i + 1] !== undefined) {
        copyArr[i + 1] = null;
      }
      copyArr[i] = null;
    } else if (copyArr[i] === "--discard-prev") {
      if (copyArr[i - 1] !== undefined && copyArr[i - 2] !== "--discard-next") {
        copyArr[i - 1] = null;
      }
      copyArr[i] = null;
    } else if (copyArr[i] === "--double-next") {
      if (copyArr[i + 1] !== undefined) {
        copyArr[i] = copyArr[i + 1];
      } else {
        copyArr[i] = null;
      }
    } else if (copyArr[i] === "--double-prev") {
      if (copyArr[i - 1] !== undefined && copyArr[i - 2] !== "--discard-next") {
        copyArr[i] = copyArr[i - 1];
      } else {
        copyArr[i] = null;
      }
    }
  }

  return copyArr.filter((item) => item !== null);
}

module.exports = {
  transform,
};
