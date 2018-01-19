function testFn (fn, result) {
    if (result === fn) {
        console.log(`+Passed: (${typeof result}) |${result}|`);
      } else {
        console.log(`-Failed: (${typeof fn}) |${fn}|. Expected: (${typeof result}) |${result}|`);
      }
      
      return result === fn ? true : false;
}

module.exports = testFn;