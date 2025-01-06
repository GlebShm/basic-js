const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0)
    throw new Error("Invalid date!");
  let month = date.getMonth();
  if (month < 2 || month == 11) return "winter";
  if (month >= 2 && month <= 4) return "spring";
  if (month > 4 && month <= 7) return "summer";
  if (month > 7 && month <= 10) return "autumn";
}
console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500)));

module.exports = {
  getSeason,
};
