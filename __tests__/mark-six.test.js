const markSix = require('../src/mark-six');

describe('Mark Six', () => {
  it('should return an array with length of 6', () => {
    const result = markSix();
    expect(result).toHaveLength(6);
  });

  // Set will remove duplicates which it should not happen, hence the length should be the same
  it('should contain unique values', () => {
    const result = markSix();
    expect(Array.from(new Set(result))).toHaveLength(6);
  });
});
