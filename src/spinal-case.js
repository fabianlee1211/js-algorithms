/**
 * Joins string with hyphen in lower case
 * Eg. Hello World => hello-world
 * @param {string} str
 * @returns {string} The spinal case string
 */
module.exports = function spinalCase(str) {
  // Replace all non-alphanumerical and non-space characters with ''
  str = str.replace(/[^A-Za-z0-9\s]/g, '');
  str = str
    .split(' ')
    .join('-')
    .toLowerCase();
  return str;
};
