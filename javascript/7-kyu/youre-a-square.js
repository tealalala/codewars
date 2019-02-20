// 2019-01-03 R

// Codewars > JavaScript > 7 kyu
// You're a Square!
// https://www.codewars.com/kata/youre-a-square

// My answer
var isSquare = function(n){
  var sqrt = Math.sqrt(n);
  return (sqrt % 1 === 0 ? console.log(`${n} true`) : false);
}

// Better Answer
var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}

// Tests
isSquare(-1) // false, "-1: Negative numbers cannot be square numbers");
isSquare( 0) // true, "0 is a square number (0 * 0)");
isSquare( 3) // false, "3 is not a square number");
isSquare( 4) // true, "4 is a square number (2 * 2)");
isSquare(25) // true, "25 is a square number (5 * 5)");
isSquare(26) // false, "26 is not a square number");
isSquare(99) // false, "99 is not a square number");
