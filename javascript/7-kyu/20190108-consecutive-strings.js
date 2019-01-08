// 2019-01-08 T

// Codewars > JavaScript > 7 kyu
// Consecutive Strings
// https://www.codewars.com/kata/consecutive-strings

// Solution 1
function longestConsec(strarr, k) {
  if(k <= 0 || k > strarr.length) {
    return "";
  }

  var longest = "";

  for(let i = 0; i < strarr.length; i++) {
    var tempArr = strarr.slice(i, i + k); // 0(inclusive), 3(not-i) => 0,2
    var tempStr = tempArr.join("");
    if(tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}



// Tests
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // "abigailtheta"
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1); // "oocccffuucccjjjkkkjyyyeehh"
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2); // "wlwsasphmxxowiaxujylentrklctozmymu"
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3); // ixoyx3452zzzzzzzzzzzz"

// Tests - Return ""
// longestConsec([], 3); // ""
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15); // ""
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0); // ""
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2); // ""
