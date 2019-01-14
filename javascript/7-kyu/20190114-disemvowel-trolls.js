// 2019-01-14 M

// Codewars > JavaScript > 7 kyu
// Disemvowel Trolls
// https://www.codewars.com/kata/disemvowel-trolls

// Solution 1
function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'');
}

// Tests
disemvowel("This website is for losers LOL!"); // "Ths wbst s fr lsrs LL!"
