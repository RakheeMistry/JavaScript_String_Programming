const str = "Beautiful";
// Rule 1: Extracted from startIndex upto (but not including) endIndex.
console.log(str.slice(2,8));

// Rule 2: If startIndex >= endIndex 
console.log(str.slice(9,2)); // Returns an empty string ("")

// Rule 3: Start Index Greater than String Length
console.log(str.slice(12)); // If startIndex is greater than the string's total length, method returns an empty string ("")

// Rule 4: Negative Index
console.log(str.slice(-4)); // Counts backward from the end of the string 
// **Formula: A negative index is treated mathematically as (string.length + index) => 9 + (-4) => 5.

const arr = [1, 2, 3];
// Rule 4: Extracted from startIndex upto (but not including) endIndex.
console.log(arr.slice(1,3));

// Rule 5: If startIndex >= endIndex
console.log(arr.slice(3,1)); // Returns an empty array ([])

// Rule 6: Start Index Greater than Array Length
console.log(arr.slice(5)); // If startIndex is greater than the array's total length, method returns an empty array ([])

// Rule 7: Negative Index
console.log(arr.slice(-2)); // Counts backward from the end of the array
// **Formula: A negative index is treated mathematically as (array.length + index) => 3 + (-2) => 1.

