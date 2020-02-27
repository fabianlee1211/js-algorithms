/**
 * Convert Arabic to Roman numbers
 * @param {number} number
 * @return {string} The roman number
 */
module.exports = function romanConverter(number) {
  if (number < 1) return undefined;
  const convertedDigits = [];
  // Object entries sorts itself =_=
  const romanNumeralKeyValues = Object.entries(romanNumerals).reverse();
  for (const [key, value] of romanNumeralKeyValues) {
    while (number - key >= 0) {
      convertedDigits.push(value);
      number -= key;
    }
  }
  const convertedString = convertedDigits.join('');
  return convertedString;
};

const romanNumerals = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};
