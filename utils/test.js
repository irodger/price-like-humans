const test = require('./testing');
var priceLikeHuman = require('./../index');

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

test(priceLikeHuman(number), stringResult)
test(priceLikeHuman(string), stringResult)
test(priceLikeHuman(float), string2Result)
test(priceLikeHuman(exponential), string3Result)
test(priceLikeHuman(trash), trashResult)
test(priceLikeHuman(floatString), floatstringResult)