const romanConverter = require('../src/roman-converter');

describe('Roman Numeral Converter', () => {
  test.each`
    number  | expected
    ${0}    | ${undefined}
    ${2}    | ${'II'}
    ${3}    | ${'III'}
    ${4}    | ${'IV'}
    ${5}    | ${'V'}
    ${45}   | ${'XLV'}
    ${68}   | ${'LXVIII'}
    ${83}   | ${'LXXXIII'}
    ${649}  | ${'DCXLIX'}
    ${1000} | ${'M'}
    ${1023} | ${'MXXIII'}
    ${2014} | ${'MMXIV'}
    ${3999} | ${'MMMCMXCIX'}
  `(`should return $expected when it is $number`, ({ number, expected }) => {
    const result = romanConverter(number);
    expect(result).toEqual(expected);
  });
});
