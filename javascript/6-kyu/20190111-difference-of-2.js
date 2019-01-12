// 2019-01-11 F

// Codewars > JavaScript > 6 kyu
// Difference of 2
// https://www.codewars.com/kata/difference-of-2

// Solution 1
function twosDifference(input){
  var orderInput = input.sort((a, b) => a - b);

  var result = [];

  for(let i = 0; i < orderInput.length; i++) {
    for(let j = 0; j < orderInput.length; j++) {
      if(orderInput[i] + 2 === orderInput[j]) {
        result.push([orderInput[i], orderInput[j]]);
      }
    }
  }

  return result;
}

// Tests
twosDifference([1,2,3]); // [[1,3]])
twosDifference([1,2,3,4]); // [[1,3],[2,4]])
twosDifference([1,3,4,6]); // [[1,3],[4,6]])
twosDifference([1,23,3,4,7]); // [[1,3]]
