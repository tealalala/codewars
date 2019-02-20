// 2019-01-03 R

// Codewars > JavaScript > 7 kyu
// Highest & Lowest
// https://www.codewars.com/kata/highest-and-lowest

function highAndLow(numbers){
  var num = numbers.split(" ").map(el => parseInt(el));
  var lowest = num[0];
  var highest = num[0];

  for(let i = 0; i < num.length; i++) {
    if(num[i] < lowest) {
      lowest = num[i];
    }
    if(num[i] > highest) {
      highest = num[i];
    }
  }

  return `${highest} ${lowest}`;
}

// Tests
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // "542 -214"
