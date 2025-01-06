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
  let obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in obj) {
      obj[s1[i]] += 1;
    } else {
      obj[s1[i]] = 1;
    }
  }
  let count =0;
  for (let j = 0; j < s2.length; j++) {
    if (s2[j] in obj && obj[s2[j]]>0) {
      count++
      obj[s2[j]] -=1
    }
  }
  
  return count
}

module.exports = {
  getCommonCharacterCount,
};
