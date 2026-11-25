const arr = [10,20,30,40,50];
const result = arr.splice(-2,0,99);
console.log(result); // Returns [] (no elements removed)
console.log(arr); // Returns [10, 20, 30, 99, 40, 50] (elements inserted)

const res1 = arr.splice(1, 0, "x");
console.log(res1);
console.log(arr); // Returns [10, "x", 20, 30, 99, 40, 50] (elements inserted)

