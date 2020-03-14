const convertToHTMLEntities = require('../src/convert-html-entities');

describe('Convert to HTML Entities', () => {
  it('should return the original string if no entities', () => {
    const result = convertToHTMLEntities('Hello');
    expect(result).toEqual('Hello');
  });

  it('should convert all entities', () => {
    const result = convertToHTMLEntities('"<Hello & World\'s>"');
    expect(result).toEqual(
      '&quot;&lt;Hello&nbsp;&amp;&nbsp;World&apos;s&gt;&quot;'
    );
  });
});
