// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Remove exclamation marks
// https://www.codewars.com/kata/remove-exclamation-marks

// Solution 1
function removeExclamationMarks(s) {
  return s.split("").filter(el => el !== "!").join("");
}

// Tests
removeExclamationMarks("Hello World!"); // "Hello World"
