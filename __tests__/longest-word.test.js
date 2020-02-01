const longestWord = require('../src/longest-word');

describe('Longest Word', () => {
  it('should return an empty string', () => {
    const result = longestWord('');
    expect(result).toEqual('');
  });

  it('should return the longest word correctly', () => {
    const result = longestWord('Italy, France, Belgium, Spain, Portugal');
    expect(result).toEqual('Portugal');
  });

  it('should return multiple words with the same max length', () => {
    const result = longestWord('Italy, Spain');
    expect(result).toEqual(['Italy', 'Spain']);
  });
});
