// Rule 1: Extracted from startIndex upto (but not including) endIndex.
const str = "Beautiful";
console.log(str.slice(2,8));

// Rule 2: If startIndex >= endIndex 
console.log(str.slice(9,2)); // Returns an empty string ("")

// Rule 3: Negative Index
console.log(str.slice(-4)); // Counts backward from the end of the string 
// **Formula: Anegative index is treated mathematically as (string.length + index) => 9 + (-4) => 5.