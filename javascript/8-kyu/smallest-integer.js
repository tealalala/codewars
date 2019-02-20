// 2019-01-09 W

// Codewars > JavaScript > 8 kyu
// Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array

// Solution 1
class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallest = args[0];

    args.map(el => {
      if(el < smallest) {
        smallest = el;
      }
    });

    return smallest;
  }
}

// Solution 2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Tests
var sif = new SmallestIntegerFinder();
sif.findSmallestInt([78,56,232,12,8]); // 8,'Should return the smallest int 8'
sif.findSmallestInt([78,56,232,12,18]); // 12,'Should return the smallest int 12'
sif.findSmallestInt([78,56,232,412,228]); // 56,'Should return the smallest int 56'
sif.findSmallestInt([78,56,232,12,0]); // 0,'Should return the smallest int 0'
sif.findSmallestInt([1,56,232,12,8]); // 1,'Should return the smallest int 1'
