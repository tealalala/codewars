// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Return Negative
// https://www.codewars.com/kata/return-negative

// Solution 1
function makeNegative(num) {
  var result = "";
  num <= 0 ? result = `${num}` : result = `-${num}`;
  console.log(result);
  return parseFloat(result);
}

// Tests
makeNegative(42); // -42
makeNegative(0); // 0
makeNegative(0.12); // -0.12
makeNegative(0.00001); // -0.00001
makeNegative(-5); // -5
