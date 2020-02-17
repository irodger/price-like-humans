const plh = require('./../dist/index.js');

describe('plh.formattedPrice tests', () => {
  it('compare plh.formattedPrice the same works with different types', () => {
    expect(plh.formattedPrice(10000)).toEqual(plh.formattedPrice('10000'));
    expect(plh.formattedPrice(1000.1234)).toEqual(plh.formattedPrice('1000.1234'));
    expect(plh.formattedPrice(1e-7)).toEqual(plh.formattedPrice('1e-7'));
  });

  it('testing plh.formattedPrice with different values', () => {
    expect(plh.formattedPrice(10000)).toEqual('10,000');
    expect(plh.formattedPrice('1000.1234')).toEqual('1,000.123,4');
    expect(plh.formattedPrice(1e-7)).toEqual('1e-7');
    expect(plh.formattedPrice('test')).toEqual(false);
    expect(plh.formattedPrice('t1000')).toEqual(false);
    expect(plh.formattedPrice(1000.1234, { separator: '.' })).toEqual('1.000,123.4');
    expect(plh.formattedPrice('1000.1234', { separator: '.' })).toEqual('1.000,123.4');
    expect(plh.formattedPrice('0.0000001', { separator: '.' })).toEqual('0,000.000.1');
  });

  it('testing plh.formattedPrice with different separators', () => {
    expect(plh.formattedPrice(1000.1234, { separator: ',' })).toEqual('1,000.123,4');
    expect(plh.formattedPrice(1000.1234, { separator: ' ' })).toEqual('1 000.123 4');
  });

  it('testing plh.formattedPrice with different delimiters', () => {
    // ToDo: Fix this. Must be 1.000,123.4'
    expect(plh.formattedPrice(1000.1234, { delimiter: ',' })).toEqual('1,000.123,4');
    expect(plh.formattedPrice(1000.1234, { delimiter: '.' })).toEqual('1,000.123,4');
    expect(plh.formattedPrice(1000.1234, { delimiter: ' ' })).toEqual('1,000 123,4');
  });

  it('testing plh.formattedPrice with the same separators and delimiters', () => {
    expect(plh.formattedPrice(1000.1234, { separator: '.', delimiter: '.' })).toEqual(false);
    expect(plh.formattedPrice(1000.1234, { separator: ',', delimiter: ',' })).toEqual(false);
    expect(plh.formattedPrice(1000.1234, { separator: ' ', delimiter: ' ' })).toEqual(false);
  });

  it('test plh.formattedPrice with several options', () => {
    expect(plh.formattedPrice(1000.1234, { separator: '.', delimiter: ',' })).toEqual('1.000,123.4');
    expect(plh.formattedPrice(1000.1234, { separator: ',', delimiter: '.' })).toEqual('1,000.123,4');
    expect(plh.formattedPrice(1000.1234, { separator: ' ', delimiter: ',' })).toEqual('1 000,123 4');
    expect(plh.formattedPrice(1000.1234, { separator: ' ', delimiter: '.' })).toEqual('1 000.123 4');
    expect(plh.formattedPrice(1000.1234, { separator: ',', delimiter: ' ' })).toEqual('1,000 123,4');
  });

  it('test plh.formattedPrice with lang', () => {
    expect(plh.formattedPrice(1000.1234, { lang: 'en' })).toEqual('1,000.123,4');
  });

  it('plh.exponentFormatter', () => {
    expect(plh.exponentFormatter(1e-8)).toBe('0.00000001');
    expect(plh.exponentFormatter(1e-20)).toBe('0.00000000000000000001');
    expect(plh.exponentFormatter(1000)).toBe('1000');
  });
});
