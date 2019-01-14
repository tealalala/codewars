// 2019-01-13 Su

// Codewars > JavaScript > 7 kyu
// Don't give me five!
// https://www.codewars.com/kata/dont-give-me-five/train/javascript

// Solution 1
function dontGiveMeFive(start, end) {
  var theArr = [];

  for(let i = 0; i <= end; i++) {
    if(!i.toString().match(5)) {
      theArr.push(i);
    }
  }

  var filterArr = theArr.filter(el => el >= start && el <= end);

  console.log(filterArr.length);
  return filterArr.length;
}


// Tests
dontGiveMeFive(1,9); // 8
dontGiveMeFive(4,17); // 12
dontGiveMeFive(10,36); //
