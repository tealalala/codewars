// 2019-01-15 T

// Codewars > JavaScript > 8 kyu
// How good are you really?
// https://www.codewars.com/kata/how-good-are-you-really

// Solution 1
function betterThanAverage(classPoints, yourPoints) {
  var average = ( classPoints.reduce((sum, el) => sum + el) ) / classPoints.length;

  return yourPoints > average ? true : false;
}


// Tests
betterThanAverage([2, 3], 5); // true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); // true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); // true
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); // false
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); // false
