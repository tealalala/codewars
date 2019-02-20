// 2019-01-04 F

// Codewars > JavaScript > 7 kyu
// Sum even numbers
// https://www.codewars.com/kata/sum-even-numbers

// Solution 1
function sumEvenNumbers(input) {
  var evenNum = 0;

  for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 == 0) {
      evenNum += input[i];
    }
  }

  return evenNum;
}

// Solution 2
function sumEvenNumbers(input) {
  var evenNum = input
    .filter(el => el % 2 === 0)
    .reduce((accumulator, currentVal) => accumulator + currentVal );

  return evenNum;
}

// Tests
sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 30
