const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    arr.push(String(str));
  }
  let addition = [];
  for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
    options.addition!==undefined?addition.push(String(options.addition) || ""):''
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] += addition.join(options.additionSeparator || "|");
  }
  return arr.join(options.separator || "+");
}

module.exports = {
  repeater,
};
