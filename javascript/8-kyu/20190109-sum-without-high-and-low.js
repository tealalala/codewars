// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Sum without highest and lowest number
// https://www.codewars.com/kata/sum-without-highest-and-lowest-number


// Solution 1
function sumArray(array) {
  if(array == null || array.length <= 1) {
    return 0;
  }

  var lowAndHigh = Math.min(...array) + Math.max(...array);
  var addArray = array.reduce((acc, currentVal) => acc + currentVal);

  return addArray - lowAndHigh;
}


// Tests
sumArray([ 6, 2, 1, 8, 10 ]); // 16
sumArray([ 1, 1, 11, 2, 3 ]); // 6
sumArray([ 1 ]); // 0
sumArray([ ]); // 0
