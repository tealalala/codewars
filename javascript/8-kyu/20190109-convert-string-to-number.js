// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Convert a String to a Number!
// https://www.codewars.com/kata/convert-a-string-to-a-number

// Solution 1
var stringToNumber = function(str){
  return Number(str);
}

// Tests
stringToNumber("1234"); // 1234
stringToNumber("605"); // 605
stringToNumber("1405"); // 1405
stringToNumber("-7"); // -7
