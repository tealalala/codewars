// 2019-01-15 T

// Codewars > JavaScript > 8 kyu
// Merge two sorted arrays into one
// https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

// Solution 1
function mergeArrays(arr1, arr2) {
  var merge = arr1.concat(arr2);
  var sortArr = merge.sort(compare);
  return sortArr.filter((x, i, a) => a.indexOf(x) == i);
}

function compare(a, b) {
  return a - b;
}


// Tests
mergeArrays([1,2,3,4], [5,6,7,8]); // [1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]); // 1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]); // [1,2,3,4,5,7,9,10,11,12]
