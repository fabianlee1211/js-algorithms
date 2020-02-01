const truncateString = require('../src/truncate-string');

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus vitae velit laoreet ornare nec id magna. Aenean luctus massa vel iaculis ultricies. Morbi fermentum sollicitudin nunc. Etiam neque nibh, placerat a libero non, maximus mollis ligula. Quisque maximus turpis id neque pretium maximus. Donec tincidunt tempus nisl, id porttitor lectus rhoncus eget. Nullam faucibus sit amet sapien ac dapibus. Maecenas gravida dolor ac diam convallis, eget tincidunt lacus congue.';

describe('Truncate String', () => {
  it('should return an empty string', () => {
    const emptyStringResult = truncateString('', 10);
    const truncateToZeroResult = truncateString(lorem, 0);
    expect(emptyStringResult).toEqual('');
    expect(truncateToZeroResult).toEqual('');
  });

  it('should return the original string when the truncate number >= the original length', () => {
    const result = truncateString(lorem, 1000);
    expect(result).toEqual(lorem);
  });

  it('should truncate correctly with truncate number less than 4', () => {
    const result = truncateString(lorem, 3);
    expect(result).toEqual('Lor...');
  });

  it('should truncate correctly', () => {
    const result = truncateString(lorem, 50);
    expect(result).toHaveLength(50);
  });
});
