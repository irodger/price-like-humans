const priceLikeHumans = require('./../index');
const reverser = require('./../utils/reverser');
const locale = require('./../utils/locale');

const cases = {
  string: '10000',
  stringReversed: '00001',
  stringOnly: '10000',
  int: 12345,
  intReversed: 54321,
  arr: [],
  number: 10000,
  numberLocalFormatter: `10${locale.separator}000`,
  zeroAfterDot: 10000.0,
  zeroAfterDotString: '10000.0',
  zeroAfterDotExponential: 10e-8,
  float: 1234.5678,
  floatDotString: '1234.5678',
  floatWithCustomDelimiter: `1 234,567 8`,
  floatWithCustomSeparator: `1 234${locale.delimiter}567 8`,
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
  exponentialLocalFormatted: `0${locale.delimiter}000${locale.separator}000${locale.separator}1`,
  trashString: 'test'
};

describe('priceLikeHumans', () => {
  it('formattedPrice', () => {
    expect(priceLikeHumans.formattedPrice({ value: 1000.1234, delimiter:',',separator:'.' })).toEqual('1.000,123.4');
    expect(priceLikeHumans.formattedPrice({ value:'1000.1234', delimiter:',',separator:'.' })).toEqual('1.000,123.4');
    expect(priceLikeHumans.formattedPrice({ value:'1000.1234', delimiter:'.',separator:'.' })).toEqual(false);
    expect(priceLikeHumans.formattedPrice(cases.number)).toEqual(cases.numberLocalFormatter);
    expect(priceLikeHumans.formattedPrice(cases.string)).toEqual(cases.numberLocalFormatter);
    expect(priceLikeHumans.formattedPrice({ value:cases.float, separator: ' ' })).toEqual(cases.floatWithCustomSeparator);
    expect(priceLikeHumans.formattedPrice(cases.exponential)).toEqual(cases.exponentialJustString);
    expect(priceLikeHumans.formattedPrice( priceLikeHumans.exponentFormatter(cases.exponential) )).toEqual(cases.exponentialLocalFormatted);
    expect(priceLikeHumans.formattedPrice(cases.trashString)).toEqual(cases.trashString);
    expect(priceLikeHumans.formattedPrice({ value: cases.floatString, delimiter:',', separator: ' ' })).toEqual(cases.floatWithCustomDelimiter);
    expect(priceLikeHumans.formattedPrice({ value: cases.floatString, separator:' ' })).toEqual(cases.floatWithCustomSeparator);
  });

  it('exponentFormatter', () => {
    expect(priceLikeHumans.exponentFormatter(cases.number)).toEqual(cases.string);
    expect(priceLikeHumans.exponentFormatter(cases.string)).toEqual(cases.string);
    expect(priceLikeHumans.exponentFormatter(cases.float)).toEqual(cases.floatDotString);
    expect(priceLikeHumans.exponentFormatter(cases.exponential)).toEqual(cases.exponentialString);
    expect(priceLikeHumans.exponentFormatter(cases.trashString)).toEqual(cases.trashString);
    expect(priceLikeHumans.exponentFormatter(cases.floatString)).toEqual(cases.floatString);
  });

  it('excessZeroes', () => {
    expect(priceLikeHumans.excessZeroes(cases.zeroAfterDot)).toEqual(cases.number);
    expect(priceLikeHumans.excessZeroes(cases.zeroAfterDotString)).toEqual(cases.number);
    expect(priceLikeHumans.excessZeroes(cases.zeroAfterDotExponential)).toEqual(cases.exponential);
  });
});

describe('reverser', () => {
  it('reverser', () => {
    expect(reverser(cases.string)).toEqual(cases.stringReversed);
    expect(reverser(cases.int)).toEqual(cases.intReversed);
    expect(reverser(cases.arr)).toEqual(null);
  });
});