import formattedPrice from '../utils/formattedPrice';

describe('formattedPrice tests', () => {
  it('compare formattedPrice the same works with different types', () => {
    expect(formattedPrice(10000)).toEqual(formattedPrice('10000'));
    expect(formattedPrice(1000.1234)).toEqual(formattedPrice('1000.1234'));
    expect(formattedPrice(1e-7)).toEqual('0.000,000,1');
  });

  it('testing formattedPrice with different values', () => {
    expect(formattedPrice(10000)).toEqual('10,000');
    expect(formattedPrice('1000.1234')).toEqual('1,000.123,4');
    expect(formattedPrice(1e-7)).toEqual('0.000,000,1');
    expect(formattedPrice('test')).toEqual(false);
    expect(formattedPrice('t1000')).toEqual(false);
    expect(formattedPrice(1000.1234, { separator: '.' })).toEqual('1.000,123.4');
    expect(formattedPrice('1000.1234', { separator: '.' })).toEqual('1.000,123.4');
    expect(formattedPrice('0.0000001', { separator: '.' })).toEqual('0,000.000.1');
  });

  it('testing formattedPrice with different separators', () => {
    expect(formattedPrice(1000.1234, { separator: ',' })).toEqual('1,000.123,4');
    expect(formattedPrice(1000.1234, { separator: ' ' })).toEqual('1 000.123 4');
    // ToDo: Fix this, must be '1000.1234'
    expect(formattedPrice(1000.1234, { separator: '' })).toEqual('1,000.123,4');
  });

  it('testing formattedPrice with different delimiters', () => {
    // ToDo: Fix this. Must be 1.000,123.4'
    expect(formattedPrice(1000.1234, { delimiter: ',' })).toEqual('1,000.123,4');
    expect(formattedPrice(1000.1234, { delimiter: '.' })).toEqual('1,000.123,4');
    expect(formattedPrice(1000.1234, { delimiter: ' ' })).toEqual('1,000 123,4');
    expect(formattedPrice(1000.1234, { delimiter: '' })).toEqual(false);
  });

  it('testing formattedPrice with the same separators and delimiters', () => {
    expect(formattedPrice(1000.1234, { separator: '.', delimiter: '.' })).toEqual(false);
    expect(formattedPrice(1000.1234, { separator: ',', delimiter: ',' })).toEqual(false);
    expect(formattedPrice(1000.1234, { separator: ' ', delimiter: ' ' })).toEqual(false);
  });

  it('test formattedPrice with several options', () => {
    expect(formattedPrice(1000.1234, { separator: '.', delimiter: ',' })).toEqual('1.000,123.4');
    expect(formattedPrice(1000.1234, { separator: ',', delimiter: '.' })).toEqual('1,000.123,4');
    expect(formattedPrice(1000.1234, { separator: ' ', delimiter: ',' })).toEqual('1 000,123 4');
    expect(formattedPrice(1000.1234, { separator: ' ', delimiter: '.' })).toEqual('1 000.123 4');
    expect(formattedPrice(1000.1234, { separator: ',', delimiter: ' ' })).toEqual('1,000 123,4');
  });

  it('test formattedPrice with lang', () => {
    expect(formattedPrice(1000.1234, { lang: 'en' })).toEqual('1,000.123,4');
  });
});
