const spinalCase = require('../src/spinal-case');

describe('Spinal Case', () => {
  it('should return the original string', () => {
    const str = 'abc';
    const result = spinalCase(str);
    expect(result).toEqual(str);
  });

  it('should return a spinal case string', () => {
    const result = spinalCase('THIS, is a strIng!!!!!!');
    expect(result).toEqual('this-is-a-string');
  });
});
