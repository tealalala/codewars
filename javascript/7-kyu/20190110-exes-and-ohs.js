// 2019-01-10 R

// Codewars > JavaScript > 7 kyu
// Exes and Ohs
// https://www.codewars.com/kata/exes-and-ohs

// Solution 1
function XO(str) {
  var exesCounter = 0;
  var ohsCounter = 0;

  var countThis = str.split("").map(el => {
    if(el.toLowerCase() === "x") {
      exesCounter += 1
    }

    if(el.toLowerCase() === "o") {
      ohsCounter += 1
    }
  })

  return exesCounter === 0 && ohsCounter === 0 ? true : exesCounter === ohsCounter ? true : false;
}

// Tests
XO('xo'); // true);
XO("xxOo"); // true);
XO("xxxm"); // false);
XO("Oo"); // false);
XO("ooom"); // false);
XO("zpzpzpp"); // true // when no 'x' and 'o' is present should return true
XO("zzoo"); // false
