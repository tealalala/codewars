// 2019-01-12 Sa - in-progress
// 2019-01-13 Su - completed

// Codewars > JavaScript > 6 kyu
// CamelCase Method
// https://www.codewars.com/kata/camelcase-method

// Solution 1
String.prototype.camelCase=function(){
  var s = this
    .split(" ")
    .filter(el => el !== "")
    .map(el => el[0].toUpperCase() + el.substring(1, el.length))
    .join("");

  return s;
}

// Tests
"test case".camelCase(); // "TestCase"
"camel case method".camelCase(); // "CamelCaseMethod"
"say hello ".camelCase(); // "SayHello"
" camel case word".camelCase(); // "CamelCaseWord"
"".camelCase(); // ""
