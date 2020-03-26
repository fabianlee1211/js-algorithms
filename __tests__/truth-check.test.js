const truthCheck = require('../src/truth-check');

describe('Truth Check', () => {
  it('should return true if property exists and its a truthy value', () => {
    const result = truthCheck(
      [
        { user: 'Tinky-Winky', sex: 'male' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    );

    expect(result).toBeTruthy();
  });

  it('should return false if property does not exist', () => {
    const result = truthCheck(
      [
        { user: 'Tinky-Winky' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    );

    expect(result).toBeFalsy();
  });

  it('should return false if property exists but its a falsy value', () => {
    const result = truthCheck(
      [
        { user: 'Tinky-Winky', sex: '' },
        { user: 'Dipsy', sex: 'male' },
        { user: 'Laa-Laa', sex: 'female' },
        { user: 'Po', sex: 'female' },
      ],
      'sex'
    );

    expect(result).toBeFalsy();
  });
});
