// Rule 1: Extracted from startIndex upto (but not including) endIndex.
const str = "World";
console.log(str.substring(2,5));

// Rule 2: The Auto-Swap Rule (If startIndex > endIndex)
console.log(str.substring(5,3)); // Swaps the parameters automatically to correct the order

// Rule 3: Negative Number(arguments) Rule
console.log(str.substring(-5)); // Treats Negative numbers as 0
console.log(str.substring(-5,3)); // Treats Negative numbers as 0
console.log(`Swap: ${str.substring(2,-3)}`); // Treats Negative numbers as 0
console.log(str.substring(-2,-3)); // Treats Negative numbers as 0

//Rule 4: NaN(arguments) Rule
console.log(str.substring(NaN,3)); // Treats NAN as 0
console.log(`Swap: ${str.substring(2,NaN)}`); // Treats NAN as 0

// Rule 5: The Equal Index Rule
console.log(str.substring(4,4)); // If both indices are equal, the method returns an empty string ("")

// Rule 6: The Out of Range Rule
console.log(str.substring(2,10)); // If endIndex is greater than the string length, it extracts upto the end of the string

// Rule 7: Both Starting and Ending Index are decimal values
console.log(str.substring(2.5,5.7)); // Decimal values are truncated to integers    

// Rule 8: Both Starting and Ending Index are boolean values
console.log(str.substring(true,false)); // Boolean values are converted to integers (1 and 0 respectively)

// Rule 9: Both Starting and Ending Index are undefined
// Note: Passing undefined as the start/end argument triggers default parameter
console.log(str.substring(undefined,undefined)); // If both indices are undefined, the method returns the entire string 
console.log(str.substring(undefined,3)); // If startIndex is undefined, it is treated as 0

// Rule 10: Both Starting and Ending Index are null
console.log(str.substring(null,null)); // If both indices are null, the method returns an empty string ("")
console.log(str.substring(null,3)); // If startIndex is null, it is treated as 0
console.log(str.substring(2,null)); // If endIndex is null, it is treated as 0