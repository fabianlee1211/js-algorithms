const panlindrome = require('../src/palindrome');

describe('Palindrome', () => {
  it('should return true', () => {
    const result = panlindrome('abba');
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = panlindrome('abc');
    expect(result).toBeFalsy();
  });
});
