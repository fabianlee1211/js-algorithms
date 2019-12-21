/**
 * This function capitalize the first letter of each word in a sentence.
 * @param {string} str
 * @returns {string} The title case string
 */
function titleCase(str) {
  const splitArray = str.split(' ')

  for (let i = 0; i < splitArray.length; i++) {
    splitArray[i] = splitArray[i].split('')
    splitArray[i][0] = splitArray[i][0].toUpperCase()
    for (let j = 1; j < splitArray[i].length; j++) {
      splitArray[i][j] = splitArray[i][j].toLowerCase()
    }
    splitArray[i] = splitArray[i].join('')
  }

  str = splitArray.join(' ')
  return str
}
