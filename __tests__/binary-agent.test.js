const binaryAgent = require('../src/binary-agent');

describe('Binary Agent', () => {
  it('should return emtpy string', () => {
    const result = binaryAgent('');
    expect(result).toEqual('');
  });

  it('should convert to characters', () => {
    const result = binaryAgent(
      '01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
    );
    expect(result).toEqual('I love FreeCodeCamp!');
  });
});
