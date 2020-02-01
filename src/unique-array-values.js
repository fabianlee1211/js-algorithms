/**
 * Find all unique values in an array
 * @param {array} arr
 * @returns {array} An array containing the unique values
 */
module.exports = function uniqueArrayValues(arr) {
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
