/**
 * Removes specified values from an array.
 * Values to be removed are passed as individual arguements after the array
 * @param {array} arr An array of values
 * @return {array} An array of the remaining values
 */

function removeArrayValue(arr) {
  const args = arr.slice.call(arguments)
  const [values, ...valuesToBeRemoved] = args

  return values.filter((val) => {
    for (const val of valuesToBeRemoved) {
      values.includes('')
    }
    for (let i = 1; i < args.length; i++) {
      if (val === args[i]) return false
    }
    return true
  })
}
