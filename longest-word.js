/**
 * Searches for the longest word in a string
 * @param {string} str
 * @return {string} max The longest word in the string.
 */
function findLongestWord(str) {
  const splitArray = str.split(' ')
  let max = ''

  for (let i = 0; i < splitArray.length; i++) {
    // Replace puntuations with empty string
    splitArray[i] = splitArray[i].replace(/[^a-zA-Z0-9]/g, '')
    if (max.length < splitArray[i].length) max = splitArray[i]
  }
  return max
}
