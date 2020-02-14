const plh = require('./../dist/index.js');

const cases = {
  string: '10000',
  stringReversed: '00001',
  stringOnly: '10000',
  int: 12345,
  intReversed: 54321,
  arr: [],
  number: 10000,
  float: 1234.5678,
  floatDotString: '1234.5678',
  floatWithCustomDelimiter: '1 234,567 8',
  floatString: '1234,5678',
  floatFormatted: '1 234.567 8',
  floatEnFormatted: '1,234.567,8',
  floatStringFormatted: '1 234,567 8',
  floatStringRuFormatted: '1 234,567 8',
  exponential: 1e-7,
  exponentialJustString: '1e-7',
  stringFormatted: '10 000',
  stringRuFormatted: '10 000',
  stringEnFormatted: '10,000',
  exponentialString: '0.0000001',
  exponentialEnFormatted: '0.000,000,1',
  exponentialFormatted: '0.000 000 1',
  trashString: 'test'
};

describe('priceLikeHumans', () => {
  it('test formattedPrice with one argument', () => {
    expect(plh.formattedPrice(10000)).toEqual('10,000');
    expect(plh.formattedPrice(cases.exponential)).toEqual(cases.exponentialJustString);
    expect(plh.formattedPrice(cases.trashString)).toEqual(cases.trashString);
  });

  it('test formattedPrice with several arguments', () => {
    expect(plh.formattedPrice({ value: 1000.1234, delimiter:',',separator:'.' })).toEqual('1.000,123.4');
    expect(plh.formattedPrice({ value:'1000.1234', delimiter:',',separator:'.' })).toEqual('1.000,123.4');
    expect(plh.formattedPrice({ value:'1000.1234', delimiter:'.',separator:'.' })).toEqual(false);
    expect(plh.formattedPrice({ value:'1000.1234', delimiter:',',separator:',' })).toEqual(false);
    expect(plh.formattedPrice({ value:'1000.1234', delimiter:' ',separator:' ' })).toEqual(false);
    expect(plh.formattedPrice({ value:'1000.1234', delimiter:'.' })).toEqual('1,000.123,4');
    expect(plh.formattedPrice({ value: 1000.1234, lang: 'en' })).toEqual('1,000.123,4');
    expect(plh.formattedPrice({ value:'1000.1234', separator:'.' })).toEqual('1.000,123.4');
    expect(plh.formattedPrice({ value:'1000.1234', separator:' ' })).toEqual('1 000.123 4');
    expect(plh.formattedPrice({ value:'1000.1234', delimiter:',', separator:' ' })).toEqual('1 000,123 4');
    expect(plh.formattedPrice({ value: cases.floatString, delimiter:',', separator: ' ' })).toEqual(cases.floatWithCustomDelimiter);
  });

  it('test combine formattedPrice with exponentFormatter', () => {
    expect(plh.formattedPrice(plh.exponentFormatter(cases.exponential))).toEqual(cases.exponentialEnFormatted);
  });

  it('exponentFormatter', () => {
    expect(plh.exponentFormatter(cases.number)).toEqual(cases.string);
    expect(plh.exponentFormatter(cases.string)).toEqual(cases.string);
    expect(plh.exponentFormatter(cases.float)).toEqual(cases.floatDotString);
    expect(plh.exponentFormatter(cases.exponential)).toEqual(cases.exponentialString);
    expect(plh.exponentFormatter(cases.trashString)).toEqual(cases.trashString);
    expect(plh.exponentFormatter(cases.floatString)).toEqual(cases.floatString);
  });
});
