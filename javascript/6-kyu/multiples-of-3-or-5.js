// 2019-01-14

// Codewars > JavaScript > 6 kyu
// Multiples of 3 or 5
// https://www.codewars.com/kata/multiples-of-3-or-5

// Solution 1
function solution(number){
  var result = 0;

  for(let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

// Tests
solution(10); // 3, 5, 6, 9 => 23
solution(21); // 3, 5, 6, 9, 12, 15, 18, 20 => 98
