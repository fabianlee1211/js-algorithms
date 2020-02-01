/**
 * Find all unique values in an array (A Set in JS)
 * @param {array} arr
 * @returns {array} An array containing the unique values
 */
module.exports = function uniqueValues(arr) {
  // The Set Cheat Code LOL
  // const set = new Set(arr);
  // return [...set];
  const newArr = [];
  while (arr.length > 0) {
    if (newArr.includes(arr[0])) {
      arr.shift();
      continue;
    }
    newArr.push(arr[0]);
    arr.shift();
  }
  return newArr;
};
