const titleCase = require('../src/title-case');

describe('Title Case', () => {
  it('should return title-cased words correctly', () => {
    const result = titleCase('this is a testing string');
    expect(result).toEqual('This Is A Testing String');
  });
});
