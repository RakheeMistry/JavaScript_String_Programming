// Rule 1: Extracted from startIndex upto (but not including) endIndex.
const str = "Javascript";
console.log(str.slice(1,6)); // avasc
console.log(str.substring(2,6)); // vasc

// Rule 2: If startIndex > endIndex 
console.log(str.slice(8,2)); // Returns an empty string ("")
console.log(str.substring(5,3)); // Swaps the parameters automatically to correct the order

// Rule 3: Negative Values
console.log(str.slice(-4)); // Counts backward from the end of the string 
console.log(str.substring(-5)); // Treats negative numbers as 0

// Rule 4: Missing second parameter
console.log(str.slice(3)); // If you omit endIndex, method extract all the way to the end of the string
console.log(str.substring(2)); // If you omit endIndex, method extract all the way to the end of the string 

// Rule 5: Out-of-bounds endIndex
console.log(str.slice(1,11)); // If endIndex is greater than the string's total length, method stop extracting at the end of the string
console.log(str.substring(2,11)); // If endIndex is greater than the string's total length, method stop extracting at the end of the string

// Rule 6: Non-destructive
console.log(str.slice(2,7)); // Method return a new string without modify the original string
console.log(str.substring(1,8)); // Method return a new string without modify the original string