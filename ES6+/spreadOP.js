// pass by value --> used on primitive datatypes such as int, char, long, short, float, boolean

// let a = 5;
// let b = a;

// console.log(a, b) // 5 5
// b = 10;
// console.log(a, b) // 5 10 

// pass by reference --> used on non-primitive datatypes such as arrays, strings, objects, classes

// const a = [1, 2, 3, 4, 5];

// const b = a;
// b.push(10);

// console.log(a)
// console.log(b)

// Pass by value shares the value and Pass by reference shares the actual variable


/* Spread Operator 

function foo(x, y, z){
    console.log(x, y, z) // 1 2 3
}

foo(...[1,2,3]); */

// when (...) spread op used in front of an array or any iterables, it acts to spread it out into its individual values

// another use of (...) spread op, we can copy arrays or values
// also it is not passing values by reference but by value

// let a = [2, 3, 4];
// let b = [1, ...a, 5];
// console.log(b) // [1, 2, 3, 4, 5]


/* Rest Operator 
    it gathers a set of value into an array!


function foo(...args){
    console.log(args)
}

foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

function zoo(x, y,...z){
    console.log(x, y, z)
}

zoo(10, 20, 30, 40, 50); // 10 20 [30 40 50] */








