const longestWord = require('../longest-word');

describe('Longest Word', () => {
  it('should return an empty string', () => {
    const result = longestWord('');
    expect(result).toEqual('');
  });

  it('should return the longest word correctly', () => {
    const result = longestWord('Italy, France, Belgium, Spain, Portugal');
    expect(result).toEqual('Portugal');
  });
});
