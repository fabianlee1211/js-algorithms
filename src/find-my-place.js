/**
 * Find my place in this sorted array.
 * @param {array} arr
 * @param {number} number
 * @return {number} The index of the place
 */
module.exports = function findMyPlace(arr, num) {
  if (arr.length === 0) return 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) return i;
  }
  return arr.length;
};
