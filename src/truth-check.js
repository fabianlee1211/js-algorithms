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
