// 2019-01-15 T

// Codewars > JavaScript > 8 kyu
// Square(n) Sum
// https://www.codewars.com/kata/square-n-sum

// Solution 1
function squareSum(numbers){
  return numbers.map(el => el ** 2).reduce((sum, el) => sum + el, 0);
}

// Tests
squareSum([1,2]); // 5
squareSum([0, 3, 4, 5]); // 50
