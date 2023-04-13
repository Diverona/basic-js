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
    if (copyArr[i] === `--discard-next`) {
      if (copyArr[i + 1]) {
        copyArr.splice(i, 2);
      } else {
        copyArr.splice(i, 1);
      }
    }
    // Не працює, відклала
    if (copyArr[i] === `--discard-prev`) {
      if (copyArr[i - 1]) {
        copyArr.splice(i - 1, 2);
      } else {
        copyArr.splice(i, 1);
      }
    }

    if (copyArr[i] === `--double-next`) copyArr.splice(i, 1, copyArr[i + 1]);
    if (copyArr[i] === `--double-prev`) copyArr.splice(i, 1, copyArr[i - 1]);
  }

  return copyArr;
}

module.exports = {
  transform,
};
