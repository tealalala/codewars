// 2019-01-12 Sa - in-progress
// 2019-01-13 Su - completed

/////////// Working solution - not done

// Codewars > JavaScript > 8 kyu
// Extract Values and Units
// https://www.codewars.com/kata/55c0ee3b9951adceaa00005f

// Solution 1
// function valAndUnits(s) {
//   var result = {val: 0, units: ""};
//   var tempVal = [];
//   var tempUnits = [];
//
//   var regNumber = /[0-9]+(\.[0-9][0-9]?)?/g;
//   var regLetter = /[a-z]/g;
//
//   for(let i = 0; i < s.length; i++) {
//     if(s[i] === "-" || s[i] === ".") {
//       tempVal.push(s[i]);
//     }
//     if(s[i].match(regNumber)) {
//       tempVal.push(s[i]);
//     } else if (s[i] === "%" || s[i].match(regLetter)) {
//       tempUnits.push(s[i]);
//     }
//   }
//
//   result["val"] = Number(tempVal.join(""));
//   result["units"] = tempUnits.join("");
//
//   return result;
// }

// Solution 2
function valAndUnits(s) {
  var result = {
    'val': val,
    'units': s
  }
  var val = parseFloat(s);
  var units = s.slice(val.toString().length).trim()

  return result;
}

// Tests
valAndUnits("12px"); // val: 12, units: "px"
valAndUnits("-1em"); // val: -1, units: "em
valAndUnits("12.5%"); // val: 12.5, units: "%"
