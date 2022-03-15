// pass by value --> used on primitive datatypes such as int, char, long, short, float, boolean

// let a = 5;
// let b = a;

// console.log(a, b) // 5 5
// b = 10;
// console.log(a, b) // 5 10 

// pass by reference --> used on non-primitive datatypes such as arrays, strings, objects, classes

const a = [1, 2, 3, 4, 5];

const b = a;
b.push(10);

console.log(a)
console.log(b)

