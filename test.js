var getHumansPrice = require('./index.js');

function testFn (fn, result) {
    const res = fn;

    if (result === res) {
        console.log(`Passed: (${typeof(result)}) ${result}`);
        return true;
    } else {
        console.log(`Failed: (${typeof(res)}) ${res}. Expected: (${typeof(result)}) ${result}`);
        return false;
    }
}

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

testFn(getHumansPrice(number), stringResult)
testFn(getHumansPrice(string), stringResult)
testFn(getHumansPrice(float), string2Result)
testFn(getHumansPrice(exponential), string3Result)
testFn(getHumansPrice(trash), trashResult)
testFn(getHumansPrice(floatString), floatstringResult)