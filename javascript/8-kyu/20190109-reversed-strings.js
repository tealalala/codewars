// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Reversed Strings
// https://www.codewars.com/kata/reversed-strings

// Solution 1
function solution(str){
  return str.split("").reverse().join("");
}

// Tests
solution('world'); // 'dlrow'
