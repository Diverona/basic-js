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
  console.log(email);

  let dogIndex = email.lastIndexOf("@");
  let curr = email.slice(dogIndex + 1);

  console.log("curr: " + curr);
  return curr;
}

module.exports = {
  getEmailDomain,
};
