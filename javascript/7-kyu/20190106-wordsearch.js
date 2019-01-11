// 2019-01-06 Su

// Codewars > JavaScript > 7 kyu
// Wordsearch
// https://www.codewars.com/kata/wordsearch

// NOTE: Unlocked Codewars (CW) solutions to compare working solution to other CW users. Below solution was chosen and slightly modified from another user's solution.

// Solution 1
function wordSearch(word, text){
  var theText = text.replace(/[^a-z ]/gi, '').split(" ").includes(word);
  return theText === true;
}

// Tests
const myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

wordSearch("desert",myText); // true
wordSearch("blue",myText); // false
wordSearch("well",myText); // true
wordSearch("house",myText); // false
wordSearch("beautiful",myText); // true
wordSearch("prince",myText); // true
wordSearch("le prince",myText); // false
