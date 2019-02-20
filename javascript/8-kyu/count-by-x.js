// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Count by X
// https://www.codewars.com/kata/count-by-x

function countBy(x, n) {
  var z = [];
  var element = 0;

  for(let i = 0; i < n; i++) {
    z.push(element += x);
  }

  return z;
}


countBy(1,10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2,5); // [2,4,6,8,10]
countBy(1,5); // [1,2,3,4,5], "Array does not match")
countBy(2,5); // [2,4,6,8,10], "Array does not match")
