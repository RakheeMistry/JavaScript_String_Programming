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

// Note: NaN Coerces to 0, null Coerces to 0, and undefined is treated as the string's length or default value for that parameter.
// Rule 6: Starting Index is NaN or undefined
console.log(`Extracted String: ${str.slice(undefined, 5)}`); // Returns "Beaut" (from index 0 to 4)
console.log(`Extracted String: ${str.slice(NaN, 5)}`); // Returns "Beaut" (from index 0 to 4)

// Rule 7: Ending Index is NaN or undefined
console.log(`Extracted String: ${str.slice(2, undefined)}`); // Returns "autiful" (from index 2 to the end of the string)
console.log(`Extracted String: ${str.slice(2, NaN)}`); // Returns ""

// Rule 8: Both Starting and Ending Index are NaN or undefined
console.log(`Extracted String: ${str.slice(undefined, undefined)}`); // Returns "Beautiful" (from index 0 to the end of the string)
console.log(`Extracted String NaN: ${str.slice(NaN, NaN)}`); // Returns ""

// Rule 9: Both Starting and Ending Index are decimal value
console.log(`Extracted String: ${str.slice("2.5", "7.5")}`); // Returns "autif" via internal ToIntegerOrInfinity conversion of the decimal values to integers (2 and 7 respectively)

// Rule 10: Both Starting and Ending Index are boolean value
console.log(`Extracted String: ${str.slice(true, false)}`); // Returns "" via internal ToIntegerOrInfinity conversion of the boolean values to integers (1 and 0 respectively)

// Rule 11: Both Starting or Ending Index are array value
console.log([3].toString()); // Returns "3" via internal ToIntegerOrInfinity conversion of the array to integer (3)
console.log(`Extracted String: ${str.slice(2, [5])}`); // Returns "ut" via internal ToIntegerOrInfinity conversion of the array values to integers (3 and 5 respectively)
console.log(`Extracted String: ${str.slice([2], 7)}`); // Returns "autif" via internal ToIntegerOrInfinity conversion of the array values to integers (2 and 5 respectively)

// Rule 12: Both Starting or Ending Index are Infinity value
console.log(`Extracted String: ${str.slice(2, Infinity)}`); // Returns "autiful" via internal ToIntegerOrInfinity conversion of the Infinity value to integer (string.length)
console.log(`Extracted String: ${str.slice(-Infinity, 5)}`); // Returns "Beaut" via internal ToIntegerOrInfinity conversion of the Infinity value to integer (0)
console.log(`Extracted String: ${str.slice(-Infinity, Infinity)}`); // Returns "Beautiful" via internal ToIntegerOrInfinity conversion of the Infinity value to integer (0 and string.length respectively)

//********** Slice Method with Arrays **********//
const arr = [1, 2, 3];
// Rule 4: Extracted from startIndex upto (but not including) endIndex.
console.log(`Extracted: ${arr.slice(1,3)}`);

// Rule 5: If startIndex >= endIndex
console.log(`Empty: ${arr.slice(3,1)}`); // Returns an empty array ([])
// Rule 6: Start Index Greater than Array Length
console.log(`Empty: ${arr.slice(5)}`); // If startIndex is greater than the array's total length, method returns an empty array ([])

// Rule 7: Negative Index
console.log(`Extracted: ${arr.slice(-2)}`); // Counts backward from the end of the array
console.log(`Extracted: ${arr.slice(-3,-1)}`); // Returns [1, 2] (from index 0 to 1)
// **Formula: A negative index is treated mathematically as (array.length + index) => 3 + (-2) => 1.

// Rule 8: 
