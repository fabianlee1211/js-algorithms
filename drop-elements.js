/**
 * Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true
 * @param {array} arr
 * @param {function} func
 * @return {array} The remaining elements in the array.
 */
function dropElements(arr, func) {
  if (arr.length <= 0) return arr
  if (!func(arr[0])) {
    arr.shift()
    dropElements(arr, func)
  }

  return arr
}
