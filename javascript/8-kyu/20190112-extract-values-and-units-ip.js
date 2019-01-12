// 2019-01-12 Sa

/////////// Working solution - not done

// Codewars > JavaScript > 8 kyu
// Extract Values and Units
// https://www.codewars.com/kata/55c0ee3b9951adceaa00005f

// Solution 1
function valAndUnits(s) {
  var result = {val: 0, units: ""};
  var tempVal = [];
  var tempUnits = [];

  var regNumber = /[0-9]+(\.[0-9][0-9]?)?/g;
  var regLetter = /[a-z]/g;


  for(let i = 0; i < s.length; i++) {
    if(s[i].match(regNumber)) {
      tempVal.push(s[i]);
    } else if (s[i].match(regLetter)) {
      tempUnits.push(s[i]);
    }
  }


  result["val"] = Number(tempVal.join(""));
  result["units"] = tempUnits.join("");

  console.log(result);
  return result;
}

// Tests
valAndUnits("12px"); // val: 12, units: "px"
valAndUnits("-1em"); // val: -1, units: "em
