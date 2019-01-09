// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Is n divisible by x and y?
// https://www.codewars.com/kata/is-n-divisible-by-x-and-y

// Solution 1
function isDivisible(n, x, y) {
  return n % x === 0 && n % y=== 0 ? true : false;
}

// Tests
isDivisible(3,3,4); // false);
isDivisible(12,3,4); // true);
isDivisible(8,3,4); // false);
isDivisible(48,3,4); // true);
