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
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let copyArr = [...arr];
  let resultArr = [];

  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] === `--discard-next`) {
      i++;
    } else if (copyArr[i] === `--discard-prev`) {
      if (i > 0 && copyArr[i - 2] !== `--discard-next`) {
        resultArr.pop();
      }
    } else if (copyArr[i] === `--double-next`) {
      if (i < copyArr.length - 1) {
        resultArr.push(copyArr[i + 1]);
      }
    } else if (copyArr[i] === `--double-prev`) {
      if (i > 0 && copyArr[i - 2] !== `--discard-next`) {
        resultArr.push(copyArr[i - 1]);
      }
    } else {
      resultArr.push(copyArr[i]);
    }
  }

  return resultArr;
}

module.exports = {
  transform,
};
