// 2019-01-10 R

// Codewars > JavaScript > 7 kyu
// Shortest Word
// https://www.codewars.com/kata/shortest-word

// Solution 1
function findShort(s){
  var shortest = s.split(" ").map(el => el.length);
  var length = Math.min(...shortest);
  return length;
}

// Tests
findShort("bitcoin take over the world maybe who knows perhaps"); //  3
findShort("turns out random test cases are easier than writing out basic ones"); // 3
