/**
 * Caesar Cipher is a simple letter substitution cipher that replaces a letter with the Nth letter after it, in the alphabet.
 */

const UPPERCASE_A = 65;
const UPPERCASE_Z = 90;

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  /**
   * Translates char codes and join string
   * @param {array} arr An array of char codes
   * @returns {string}
   */
  translateCharCode(arr) {
    for (let j = 0; j < arr.length; j++) {
      arr[j] = String.fromCharCode(arr[j]);
    }
    return arr.join('');
  }

  /**
   * Encodes string
   * @param {string} str String to be encoded
   * @returns {string} The encoded string
   */
  encode(str) {
    const capStr = str.toUpperCase();
    const arr = [];
    for (let i = 0; i < capStr.length; i++) {
      const currentChar = capStr.charCodeAt(i);
      const isValidCharCodeRange =
        currentChar >= UPPERCASE_A && currentChar <= UPPERCASE_Z;
      if (isValidCharCodeRange) {
        let encodedChar = capStr.charCodeAt(i) + this.shift;
        if (encodedChar > UPPERCASE_Z)
          encodedChar = encodedChar - UPPERCASE_Z + UPPERCASE_A - 1;
        arr.push(encodedChar);
      } else arr.push(currentChar);
    }

    const encodedString = this.translateCharCode(arr);
    return encodedString;
  }

  /**
   * Decodes string
   * @param {string} str String to be decoded
   * @returns {string} The decoded string
   */
  decode(str) {
    const capStr = str.toUpperCase();
    const arr = [];
    for (let i = 0; i < capStr.length; i++) {
      const currentChar = capStr.charCodeAt(i);
      const isValidCharCodeRange =
        currentChar >= UPPERCASE_A && currentChar <= UPPERCASE_Z;
      if (isValidCharCodeRange) {
        let encodedChar = capStr.charCodeAt(i) - this.shift;
        if (encodedChar < UPPERCASE_A)
          encodedChar = UPPERCASE_Z - (UPPERCASE_A - encodedChar) + 1;
        arr.push(encodedChar);
      } else arr.push(currentChar);
    }

    const decodedString = this.translateCharCode(arr);
    return decodedString;
  }
}

module.exports.CaesarCipher = CaesarCipher;
