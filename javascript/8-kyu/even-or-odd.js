// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Even or Odd
// https://www.codewars.com/kata/even-or-odd

// Solution 1
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

// Tests
even_or_odd(2); // "Even";
even_or_odd(0); // "Even";
even_or_odd(7); // "Odd"
even_or_odd(1); // "Odd"
