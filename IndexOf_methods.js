// IndexOf() with string
const str = "Typescript  20";
// Rule 1: First Match Wins: It performs a forward search and stops immediately at the first occurrence.
console.log(str.indexOf('e'));

// Rule 2: Case-Sensitivity: For strings, searches are strictly case-sensitive ("A" does not match "a").
console.log(str.indexOf('P'));

// Rule 3: Optional Starting Index (fromIndex)
// * If fromIndex >= length, strings return -1 unless searching for "".
console.log(str.indexOf('T',10));
// * If fromIndex is negative, the search offset is calculated from the end of the string (e.g., -2 starts searching at length - 2), though it still searches left-to-right.
console.log(str.indexOf('t',-3));

// Rule 4: Type Coercion: coerces non-string arguments into strings before searching.
console.log(str.indexOf(20));

// Rule 5: Empty String Rule: In string searches, searching for an empty string "" with any fromIndex <= string.length returns that fromIndex.
console.log(str.indexOf('',10));