/**
 * Finds the difference of the elements in two arrays.
 * @param {array} arr1
 * @param {array} arr2
 * @return {array} newArr The array that contains the differed elements
 */
module.exports = function diffArray(arr1, arr2) {
  let newArr = [];
  let sortArr = [];

  newArr = arr1.concat(arr2);
  sortArr = newArr.slice().sort();
  newArr = sortArr.filter(
    el => !(arr1.indexOf(el) > -1 && arr2.indexOf(el) > -1)
  );

  return newArr;
};
