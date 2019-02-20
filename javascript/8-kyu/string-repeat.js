// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// String repeat
// https://www.codewars.com/kata/string-repeat

// Solution 1
function repeatStr (n, s) {
  return s.repeat(n);
}


// Tests
repeatStr(3, "*"); // "***"
repeatStr(5, "#"); // "#####"
repeatStr(2, "ha "); // "ha ha "
