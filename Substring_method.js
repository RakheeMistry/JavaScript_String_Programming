// Rule 1: Extracted from startIndex upto (but not including) endIndex.
const str = "World";
console.log(str.substring(2,5));

// Rule 2: If startIndex > endIndex
console.log(str.substring(5,3)); // Swaps the parameters automatically to correct the order

// Rule 3: Negative Values
console.log(str.substring(-5)); // Treats negative numbers as 0