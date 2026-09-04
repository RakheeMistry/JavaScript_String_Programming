//********** Slice Method with Strings **********//
const str = "Beautiful";
// Rule 1: Extracted from startIndex upto (but not including) endIndex.
console.log(`Extracted String: ${str.slice(2,8)}`); // Returns "autifu" (from index 2 to 7)

// Rule 2: If startIndex >= endIndex 
console.log(`Empty String: ${str.slice(9,2)}`); // Returns an empty string ("")

// Rule 3: Start Index Greater than String Length
console.log(`Empty String: ${str.slice(12)}`); // If startIndex is greater than the string's total length, method returns an empty string ("")

// **Formula: A negative index is treated mathematically as (string.length + index) => 9 + (-4) => 5.
// Rule 4: Negative Index
console.log(`Extracted String: ${str.slice(-4)}`); // Counts backward from the end of the string 

// Rule 5: Negative Start Index and Negative End Index
console.log(`Extracted String: ${str.slice(-7,-2)}`); // Returns "autif" (from index 2 to 7)

// Note: NaN Coerces to 0 and undefined is treated as the string's length or default value for that parameter.
// Rule 6: Starting Index is NaN or undefined
console.log(`Extracted String: ${str.slice(undefined, 5)}`); // Returns "Beaut" (from index 0 to 4)
console.log(`Extracted String: ${str.slice(NaN, 5)}`); // Returns "Beaut" (from index 0 to 4)

// Rule 7: Ending Index is NaN or undefined
console.log(`Extracted String: ${str.slice(2, undefined)}`); // Returns "autiful" (from index 2 to the end of the string)
console.log(`Extracted String: ${str.slice(2, NaN)}`); // Returns ""

// Rule 8: Both Starting and Ending Index are NaN or undefined
console.log(`Extracted String: ${str.slice(undefined, undefined)}`); // Returns "Beautiful" (from index 0 to the end of the string)
console.log(`Extracted String NaN: ${str.slice(NaN, NaN)}`); // Returns ""

//********** Slice Method with Arrays **********//
// const arr = [1, 2, 3];
// // Rule 4: Extracted from startIndex upto (but not including) endIndex.
// console.log(`Extracted: ${arr.slice(1,3)}`);

// // Rule 5: If startIndex >= endIndex
// console.log(`Empty: ${arr.slice(3,1)}`); // Returns an empty array ([])
// // Rule 6: Start Index Greater than Array Length
// console.log(`Empty: ${arr.slice(5)}`); // If startIndex is greater than the array's total length, method returns an empty array ([])

// // Rule 7: Negative Index
// console.log(`Extracted: ${arr.slice(-2)}`); // Counts backward from the end of the array
// // **Formula: A negative index is treated mathematically as (array.length + index) => 3 + (-2) => 1.

