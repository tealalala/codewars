// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Convert number to reversed array of digits
// https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits

// Solution 1
function digitize(n) {
  return n.toString().split("").map(el => parseInt(el)).reverse();  
}

// Tests
digitize(35231); // [1,3,2,5,3]
