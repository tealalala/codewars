// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Get the mean of an array
// https://www.codewars.com/kata/get-the-mean-of-an-array

// Solution 1
function getAverage(marks){
  return parseInt(marks.reduce((s, n) => s + n) / marks.length);
}

// Tests
getAverage([2,2,2,2]); // 2
getAverage([1,2,3,4,5,]); // 3
getAverage([1,1,1,1,1,1,1,2]); // 1
