const findMissingLetter = require('../src/find-missing-letter');

describe('Find Missing the Letter', () => {
  it('should return undefined', () => {
    const result = findMissingLetter('abc');
    expect(result).toEqual(undefined);
  });

  it('should return the missing letter correctly', () => {
    const result = findMissingLetter('abdefg');
    expect(result).toEqual('c');
  });
});
