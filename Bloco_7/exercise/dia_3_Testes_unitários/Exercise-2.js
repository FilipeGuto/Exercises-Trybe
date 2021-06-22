const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(myRemove([1, 2, 3, 4], 3));

assert.notStrictEqual(myRemove([1, 2, 3, 4], 3));

assert.strictEqual(myRemove(typeof([])), []);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5));

//////////////////////////////
