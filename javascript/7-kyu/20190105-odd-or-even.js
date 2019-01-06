// 2019-01-05 Sa

// Codewars > JavaScript > 7 kyu
// Odd or Even?
// https://www.codewars.com/kata/odd-or-even

// Solution 1
function oddOrEven(array) {
  if(array.length === 0) {
    return 'even';
  };

  var sum = array.reduce((acc, currentVal) => acc + currentVal);

  if(sum % 2 == 0) {
    return 'even';
  } else {
    return 'odd'
  };
}

// Solution 2
function oddOrEven(array) {
  var sum = array.reduce((acc, currentVal) => acc + currentVal, 0);
  sum % 2 ? 'even' : 'odd';
}

// Tests
oddOrEven([0]); // 'even'
oddOrEven([1]); // 'odd'
oddOrEven([]); // 'even'
oddOrEven([2, 5, 34, 6]); // "odd"
oddOrEven([0, -1, -5]); // "even"
oddOrEven([-1, -1, -5]); // "odd"
