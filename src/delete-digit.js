const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString().split('').map(Number);
  
  let max = 0;
  for (let i = 0; i < number.length; i++) {
    let number2 = [...number]
    number2.splice(i, 1);
    
    if (number2.join('') > max) {
      max = Number(number2.join(''))
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
