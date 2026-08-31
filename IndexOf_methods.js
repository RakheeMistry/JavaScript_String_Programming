// IndexOf() with string
const str = "Typescript 20 NaN";
console.log('**************indexOf() with string**************');
// Rule 1: First Match Wins: It performs a forward search and stops immediately at the first occurrence.
console.log(`First Match Wins: ${str.indexOf('e')}`);

// Rule 2: Case-Sensitivity: For strings, searches are strictly case-sensitive ("A" does not match "a").
console.log(`Case-Sensitivity: ${str.indexOf('P')}`);

// Rule 3: Optional Starting Index (fromIndex)
// * If fromIndex >= length, strings return -1 unless searching for "".
console.log(`Optional Starting Index: ${str.indexOf('T',10)}`);
// * If fromIndex is negative, the search offset is calculated from the end of the string (e.g., -2 starts searching at length - 2), though it still searches left-to-right.
console.log(`Optional Starting Index: ${str.indexOf('t',-3)}`);

// Rule 4: Type Coercion: coerces non-string arguments into strings before searching.
console.log(`Type Coercion: ${str.indexOf(20)}`);
console.log(`Type Coercion: ${str.indexOf(NaN)}`);

// Rule 5: Empty String Rule
// * In string searches, searching for an empty string "" with any fromIndex <= string.length returns that fromIndex.
console.log(`Empty String Rule: ${str.indexOf('',10)}`);
// * In string searches, searching for an empty string "" returns 0.
console.log(`Empty String Rule: ${str.indexOf('')}`);

// IndexOf() with array
const arr = ['apple', 'rat', 78, NaN];
console.log('**************indexOf() with array**************');
// Rule 1: First Match Wins: It performs a forward search and stops immediately at the first occurrence. 
console.log(`First Match Wins: ${arr.indexOf('apple')}`);

// Rule 2: Searching NaN : Always return -1
console.log(`Search NaN: ${arr.indexOf(NaN)}`);

// Rule 3: Type Coercion: requires an exact type match (strict equality ===)
console.log(`Type Coercion: ${arr.indexOf('78')}`);

// Rule 4: Empty Array Rule: In array searches, searching for an empty array [] returns -1.
console.log(`Empty Array Rule: ${arr.indexOf()}`);