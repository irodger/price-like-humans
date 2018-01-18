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
 * Testing humans like price (getPrice)
 */
console.log('Testing humans like price (getPrice):\n');
test(priceLikeHumans.getPrice(cases.number), cases.stringFormatted)
test(priceLikeHumans.getPrice(cases.string), cases.stringFormatted)
test(priceLikeHumans.getPrice(cases.float), cases.floatFormatted)
test(priceLikeHumans.getPrice(cases.exponential), cases.exponentialJustString)
test(priceLikeHumans.getPrice( priceLikeHumans.exponentialFormatter(cases.exponential) ), cases.exponentialFormatted)
test(priceLikeHumans.getPrice(cases.trashString), cases.trashString)
test(priceLikeHumans.getPrice(cases.floatString, ','), cases.floatStringFormatted)

/**
 * Testing exponentialFormatter
 */
console.log('\n\nTesting exponentialFormatter:\n');
test(priceLikeHumans.exponentialFormatter(cases.number), cases.number)
test(priceLikeHumans.exponentialFormatter(cases.string), cases.string)
test(priceLikeHumans.exponentialFormatter(cases.float), cases.float)
test(priceLikeHumans.exponentialFormatter(cases.exponential), cases.exponentialString)
test(priceLikeHumans.exponentialFormatter(cases.trashString), cases.trashString)
test(priceLikeHumans.exponentialFormatter(cases.floatString), cases.floatString)

/**
 * Testing removeZero
 */
console.log('\n\nTesting removeZero:\n');
test(priceLikeHumans.removeZero(cases.zeroAfterDot), cases.number)
test(priceLikeHumans.removeZero(cases.zeroAfterDotString), cases.number)
test(priceLikeHumans.removeZero(cases.zeroAfterDotExponential), cases.exponential)