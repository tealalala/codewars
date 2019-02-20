// 2019-01-08 T

// Codewars > JavaScript > 7 kyu
// Jaden Casing Strings
// https://www.codewars.com/kata/jaden-casing-strings/

// Solution 1
String.prototype.toJadenCase = function () {
  return this.split(" ").map(el => el.substring(0,1).toUpperCase() + el.substring(1, el.length)).join(" ");
};

// Tests
var str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase() // "How Can Mirrors Be Real If Our Eyes Aren't Real"
