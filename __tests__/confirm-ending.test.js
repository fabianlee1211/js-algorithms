const confirmEnding = require('../src/confirm-ending');

describe('Confirm Ending', () => {
  it('should return true', () => {
    const result = confirmEnding('Friend', 'end');
    expect(result).toBeTruthy();
  });

  it('should return false', () => {
    const result = confirmEnding('Friend', 'en');
    expect(result).toBeFalsy();
  });
});
