const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    for (let i = 0; i < arr.length; i++) {
      let sum = 1;
      if (Array.isArray(arr[i])) {
        sum += this.calculateDepth(arr[i]);
      }
      max = sum > max ? sum : max;
    }
    return max;
  }
}

module.exports = {
  DepthCalculator,
};
