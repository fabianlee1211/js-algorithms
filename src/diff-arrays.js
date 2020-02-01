/**
 * Finds the difference of the elements in two arrays.
 * @param {array} arr1
 * @param {array} arr2
 * @return {array} diffArr The array that contains the differed elements
 */
module.exports = function diffArray(arr1, arr2) {
  const combinedArr = [...arr1, ...arr2];
  const sortedArr = [...combinedArr].sort();
  const diffArr = sortedArr.filter(
    el => !(arr1.includes(el) && arr2.includes(el))
  );

  return diffArr;
};
