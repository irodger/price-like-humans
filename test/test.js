const test = require('./testFn');
const priceLikeHumans = require('./../index');

/**
 * Test cases
 */
const cases = {
    string: '10000',
    stringOnly: '10000',
    number: 10000,
    zeroAfterDot: 10000.0,
    zeroAfterDotString: '10000.0',
    zeroAfterDotExponential: 10e-8,
    float: 1234.5678,
    floatString: '1234,5678',
    floatFormatted: '1 234.567 8',
    floatStringFormatted: '1 234,567 8',
    exponential: 1e-7,
    exponentialJustString: '1e-7',
    stringFormatted: '10 000',
    exponentialString: '0.0000001',
    exponentialFormatted: '0.000 000 1',
    trashString: 'test'
}
/**
 * Testing humans like price (formattedPrice)
 */
console.log('Testing humans like price (formattedPrice):\n');
test(priceLikeHumans.formattedPrice(1000.1234, ',','.'), '1.000,123.4')
test(priceLikeHumans.formattedPrice('1,000.123,4', '.','.'), '1.000.123.4')
test(priceLikeHumans.formattedPrice('1000.1234', ',','.'), '1.000,123.4')
test(priceLikeHumans.formattedPrice(cases.number), cases.stringFormatted)
test(priceLikeHumans.formattedPrice(cases.string), cases.stringFormatted)
test(priceLikeHumans.formattedPrice(cases.float), cases.floatFormatted)
test(priceLikeHumans.formattedPrice(cases.exponential), cases.exponentialJustString)
test(priceLikeHumans.formattedPrice( priceLikeHumans.exponentFormatter(cases.exponential) ), cases.exponentialFormatted)
test(priceLikeHumans.formattedPrice(cases.trashString), cases.trashString)
test(priceLikeHumans.formattedPrice(cases.floatString, ','), cases.floatStringFormatted)

/**
 * Testing exponentFormatter
 */
console.log('\n\nTesting exponentFormatter:\n');
test(priceLikeHumans.exponentFormatter(cases.number), cases.number)
test(priceLikeHumans.exponentFormatter(cases.string), cases.string)
test(priceLikeHumans.exponentFormatter(cases.float), cases.float)
test(priceLikeHumans.exponentFormatter(cases.exponential), cases.exponentialString)
test(priceLikeHumans.exponentFormatter(cases.trashString), cases.trashString)
test(priceLikeHumans.exponentFormatter(cases.floatString), cases.floatString)

/**
 * Testing excessZeroes
 */
console.log('\n\nTesting excessZeroes:\n');
test(priceLikeHumans.excessZeroes(cases.zeroAfterDot), cases.number)
test(priceLikeHumans.excessZeroes(cases.zeroAfterDotString), cases.number)
test(priceLikeHumans.excessZeroes(cases.zeroAfterDotExponential), cases.exponential)