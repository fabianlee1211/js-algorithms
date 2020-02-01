const CaesarCipher = require('../src/caesar-cipher').CaesarCipher;

describe('Caesar Cipher', () => {
  let cipher;

  describe('Shift 13', () => {
    beforeEach(() => {
      cipher = new CaesarCipher(13);
    });

    it('should encode correctly', () => {
      const result = cipher.encode('FREE CODE CAMP');
      expect(result).toEqual('SERR PBQR PNZC');
    });

    it('should decode correctly', () => {
      const result = cipher.decode('SERR PBQR PNZC');
      expect(result).toEqual('FREE CODE CAMP');
    });
  });

  describe('Shift 1', () => {
    beforeEach(() => {
      cipher = new CaesarCipher(1);
    });

    it('should encode correctly', () => {
      const result = cipher.encode('ABC');
      expect(result).toEqual('BCD');
    });

    it('should decode correctly', () => {
      const result = cipher.decode('J MPWF QZUIPO');
      expect(result).toEqual('I LOVE PYTHON');
    });
  });
});
