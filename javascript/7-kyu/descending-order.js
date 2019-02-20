// 2019-01-10 R

// Codewars > JavaScript > 7 kyu
// Descending Order
// https://www.codewars.com/kata/descending-order

// Solution 1
function descendingOrder(n){
  var descend = n.toString().split("").map(el => Number(el)).sort().reverse().join("");

  return Number(descend);
}

// Tests
descendingOrder(0); // 0
descendingOrder(1); // 1
descendingOrder(21445); // 54421
descendingOrder(123456789); // 987654321
