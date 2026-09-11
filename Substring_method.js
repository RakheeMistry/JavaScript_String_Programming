// Rule 1: Extracted from startIndex upto (but not including) endIndex.
const str = "World";
console.log(str.substring(2,5));

// Rule 2: The Auto-Swap Rule (If startIndex > endIndex)
console.log(str.substring(5,3)); // Swaps the parameters automatically to correct the order

// Rule 3: Negative Number(arguments) Rule
console.log(str.substring(-5)); // Treats NAN as 0
console.log(str.substring(-5,3)); // Treats NAN as 0
console.log(`Swap: ${str.substring(2,-3)}`); // Treats NAN as 0
console.log(str.substring(-2,-3)); // Treats NAN as 0

//Rule 4: NaN(arguments) Rule
console.log(str.substring(NaN,3)); // Treats NAN as 0
console.log(`Swap: ${str.substring(2,NaN)}`); // Treats NAN as 0

// Rule 5: The Equal Index Rule
console.log(str.substring(4,4)); // If both indices are equal, the method returns an empty string ("")

// Rule 6: The Out of Range Rule
console.log(str.substring(2,10)); // If endIndex is greater than the string length, it extracts upto the end of the string
