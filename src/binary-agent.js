/**
 * Converts binary strings to characters - O(n^2)
 * @param {string} str - Binary strings
 * @returns {string} Converted string characters
 */
module.exports = function binaryAgent(str) {
  if (str === '') return '';

  let convertedCharacters = [];
  const binaryCharacters = str.split(' ');

  for (const character of binaryCharacters) {
    const charCode = character.split('').reduce((acc, curr, index) => {
      return curr * Math.pow(2, character.length - index - 1) + acc;
    }, 0);
    convertedCharacters.push(String.fromCharCode(charCode));
  }

  return convertedCharacters.join('');
};
