// 2019-01-07 M

// Codewars > JavaScript > 7 kyu
// Find the next perfect square!
// https://www.codewars.com/kata/find-the-next-perfect-square

// Solution 1
function findNextSquare(sq) {
  var thisSquare = Math.sqrt(sq);
  var nextSquare = thisSquare + 1;
  var squareNextSquare = nextSquare ** 2;

  return thisSquare % 1 ? console.log(-1) : console.log(squareNextSquare);
}

// Solution 2 - After reviewing answers
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
// Note: The above solution is the top answer of ths problem. Good use of ternary operator by making if-statement evaluate the non-squares first, then the squares. Very good at nesting math operations. In my solution 1, I used helper variables to make each step clear to me.

// Tests
// findNextSquare(114); // -1
// findNextSquare(121); // 144, "Wrong output for 121"
// findNextSquare(625); // 676, "Wrong output for 625"
// findNextSquare(319225); // 320356, "Wrong output for 319225"
// findNextSquare(15241383936); // 15241630849, "Wrong output for 15241383936"
