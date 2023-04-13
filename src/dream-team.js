const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dreamTeamName = [];

  if (!members || !Array.isArray(members) || members.length === 0) return false;

  for (let name of members) {
    if (typeof name !== "string" || typeof name[0] !== "string") {
      dreamTeamName = dreamTeamName;
    } else {
      name = name.trim();
      dreamTeamName.push(name[0].toUpperCase());
    }
  }

  return dreamTeamName.sort().join("");
}

module.exports = {
  createDreamTeam,
};
