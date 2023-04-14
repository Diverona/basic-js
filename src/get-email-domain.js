const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let atIndex = email.indexOf("@");
  let curr = email.slice(atIndex + 1);

  if (curr.indexOf("@") !== -1) {
    return getEmailDomain(curr);
  }

  return curr;
}

module.exports = {
  getEmailDomain,
};
