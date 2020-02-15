/**
 * Array flatten infinite depth method from scratch
 * @param {array} arr
 * @return {array} The flatten array
 */
module.exports = function flatten(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      // Spreading removes one level of array until the else case is met
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
};
