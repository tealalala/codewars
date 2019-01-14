// 2019-01-14 M

// Codewars > JavaScript > 8 kyu
// Opposite number
// https://www.codewars.com/kata/opposite-number/

function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}

opposite(1); // -1
opposite(-1); // 1
opposite(-1.555); // 1.555
opposite(4.25); // -4.25
opposite(3.3333333); // -3.3333333
