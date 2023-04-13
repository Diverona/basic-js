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
  const seasons = {
    11: "winter",
    0: "winter",
    1: "winter",
    2: "spring",
    3: "spring",
    4: "spring",
    5: "summer",
    6: "summer",
    7: "summer",
    8: "fall",
    9: "fall",
    10: "fall",
  };

  if (!date) return "Unable to determine the time of year!";
  if (
    date.toString() === Date.prototype.toString.call(new Date()) ||
    !(date instanceof Date)
  )
    throw new Error("Invalid date!");

  const ourDate = new Date(date);
  const month = ourDate.getMonth();

  return seasons[month.toString()];
}

module.exports = {
  getSeason,
};
