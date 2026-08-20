// Rule 1: Extracted from startIndex upto (but not including) endIndex.
const str = "World";
console.log(str.substring(2,5));

// Rule 2: The Auto-Swap Rule (If startIndex > endIndex)
console.log(str.substring(5,3)); // Swaps the parameters automatically to correct the order

// Rule 3: Negative Number(arguments) Rule
console.log(str.substring(-5)); // Treats negative numbers or NAN as 0

// Rule 4: The Equal Index Rule
console.log(str.substring(4,4)); // If both indices are equal, the method returns an empty string ("")