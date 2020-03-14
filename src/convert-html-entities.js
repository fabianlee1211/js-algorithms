/**
 * @param {string} str - String to be converted to HTML entities
 * @returns {string} String with HTML entities
 */
module.exports = function convertToHTMLEntities(str) {
  const entityRegex = /(\s|&|\"|<|>|\')/g;
  return str.replace(entityRegex, (match, en) => {
    if (!match) return str;
    else return `&${entitiesTranslations[en]};`;
  });
};

const entitiesTranslations = {
  ' ': 'nbsp',
  '&': 'amp',
  '"': 'quot',
  '<': 'lt',
  '>': 'gt',
  "'": 'apos',
};
