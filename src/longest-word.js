/**
 * Searches for the longest word in a string
 * @param {string} str
 * @return {string | array} The longest word(s) in the string.
 */
module.exports = function findLongestWord(str) {
  const splitArray = str.split(' ');
  let wordLengthMap = new Map();

  // Creates a map key value pairs with word length and words
  for (const word of splitArray) {
    const truncatedWord = word.replace(/[^a-zA-Z0-9]/g, '');
    const value = wordLengthMap.get(truncatedWord.length) || [];
    wordLengthMap.set(truncatedWord.length, [...value, truncatedWord]);
  }

  const maxLength = Math.max(...Array.from(wordLengthMap.keys()));
  const longestWord = wordLengthMap.get(maxLength);

  return longestWord.length === 1 ? longestWord[0] : longestWord;
};
