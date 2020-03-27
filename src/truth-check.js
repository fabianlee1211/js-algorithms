/**
 * Find my place in this sorted array.
 * @param {array} collection - Array of objects
 * @param {string} string - Property name string
 * @return {boolean} Whether the property exist and is truthy
 */
module.exports = function truthCheck(collection, property) {
  let truth = true;
  for (const item of collection) {
    if (!item.hasOwnProperty(property)) {
      return false;
    } else {
      truth = truth && Boolean(item[property]);
    }
  }
  return truth;
};
