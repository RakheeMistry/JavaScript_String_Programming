// includes() with strings
const str = "Hello Javascript world! NaN";
// Rule 1: Substring Search -> It checks if the exact sequence of charaters exists anywhere within the string.
console.log(str.includes("world")); // true

// Rule 2: Case Sensitivity -> The search is strictly case-sensitive ('Apple' is not the same as "apple").
console.log(str.includes("hello")); // false

// Rule 3: Optional Position -> The second argument specifies the character position where the search should begin (defaults to 0).
console.log(str.includes("Javascript", 2));

// Rule 4: NaN Support -> find NaN inside an String
console.log(str.includes(NaN)); // true. Because NaN coerced to string "NaN".

/****************************************************************************************************/

// includes() with arrays
const str1 = ["A","B","C", NaN, 404];
// Rule 1: Case Sensitivity -> When searching an array of strings, the values must match exactly, including casing.
console.log(str1.includes("a"));

// Rule 2: Optional Starting Index -> You can pass a second argument to specify the index where the search should begin.
console.log(str1.includes("A",2));

// Rule 3: Negative Indices -> When you pass a negative number as the second argument(fromIndex), the array calculates the starting search position using formula: array.length + fromIndex
console.log(str1.includes("B",-4)); // 5+(-4) -> 1 // true
console.log(str1.includes("B", -1)); // 5+(-1) -> 4 // false

// Rule 4: NaN Support -> find NaN inside an array
console.log(str1.includes(NaN));

// Rule 5: Exact Match -> Array includes() uses strict equality (===) to determine if an element exists. This means types must match exactly, and references matter for objects and arrays.
console.log(str1.includes(404)); // true
console.log(str1.includes("404")); // false. Because array does not coerce types

// Note: Two identical-looking objects are not the same unless they point to the exact same reference in memory.
const items = [{id:1}, {id:2}];
console.log(items.includes({id:1}));

// Store the Reference (If Using includes)
// If you keep a variable holding the actual reference to the object in the array, includes() works as expected:

const item1 = { id: 1 };
const item2 = { id: 2 };
const item3 = [item1, item2];

console.log(item3.includes(item1)); // true