const test = require('./testing');
var priceLikeHumans = require('./../index');

/**
 * Test cases
 */
const number = 10000;
const string = '10000';
const floatString = '1000,02';
const float = 1234.0987;
const exponential = 1e-6;
const trash = 'teststring';
const stringResult = '10 000';
const string2Result = '1 234.098 7';
const string3Result = '0.000 001';
const floatstringResult = '1 000,02';
const trashResult = 'teststring';

test(priceLikeHumans(number), stringResult)
test(priceLikeHumans(string), stringResult)
test(priceLikeHumans(float), string2Result)
test(priceLikeHumans(exponential), string3Result)
test(priceLikeHumans(trash), trashResult)
test(priceLikeHumans(floatString), floatstringResult)