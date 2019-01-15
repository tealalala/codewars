// 2019-01-15 T

// Codewars > JavaScript > 8 kyu
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence

// Solution 1
function replace(s){
  return s.replace(/[aeiou]/ig, "!");
}

// Tests
replace("Hi!"); // "H!!"
replace("!Hi! Hi!"); // "!H!! H!!"
replace("aeiou"); // "!!!!!"
replace("ABCDE"); // "!BCD!"
