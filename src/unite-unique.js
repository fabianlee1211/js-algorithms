/**
 * Takes two or more arrays and returns a new array of unique values in the  order of the original provided arrays
 * @param {array} arr
 * @returns {array} array of unique values
 */
module.exports = function uniteUnique(arr) {
  const args = arr.slice.call(arguments);
  const values = args.flat();
  const uniqueValues = new Set(values);
  return [...uniqueValues];
};
