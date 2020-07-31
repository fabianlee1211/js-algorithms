/**
 * Removes specified values from an array.
 * Values to be removed are passed as individual arguments after the array
 * @param {array} arr An array of values
 * @return {array} An array of the remaining values
 */
module.exports = function removeArrayValues(arr) {
  const args = arr.slice.call(arguments);
  const [values, ...valuesToBeRemoved] = args;

  if (valuesToBeRemoved.length === 0) return values;

  return values.filter((val) => {
    if (valuesToBeRemoved.includes(val)) return false;
    else return true;
  });
};
