// Let, Const & Var

/*

1) Variable scope
    --> Let and Const are Block-scoped while var is Function-scoped!
    --> Scope: scope is a section/region in your program where a variable have its existence or valid! and beyond that region it's not accessible.
     --> let and const are stored in separate memory space while var is stored in global object memory space that's why var variables are accessible outside the scope!
*/

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a, b, c) // 10 20 30
}

console.log(c) // ReferenceError: a, b is not defined || c = 30

function run(){
    var x = 1;
    console.log(x) // 1
}

console.log(x) // ReferenceError: x is not defined
run();



/*

2) Variable Shadowing: if you have 2 variables with the same name but 1 in a certain scope(inner scope) and the other one in its outer scope then when you call that variable, 
the value assigned to the variable in the inner scope will be stored in the variable in the memory space! this is called as variable shadowing or shadowing!

*/
function sleep(){
    var a = 100;
    if(true){
        let a = 10; // here inner scope a is shadowing outer scope a!
        console.log(a) // 10
    }
    
    console.log(a) // 100
}

sleep();

/* --> Illegal Shadowing: you can shadow var with let but you cannot shadow let with var, that is known as illegal shadowing!

 function walk(){
    var a = 1;
    let b = 2;

    if(true){
        let a = 10; // legal shadowing
        var b = 20; // illegal shadowing
        console.log(a) // 10 i.e legal shadowing
        console.log(b) //SyntaxError: b is already declared 
    }
 }

 walk();
*/


/*

3) Declaration:
   --> you can declare var variables multiple times but cannot declare let and const more than once!

    var a = 1; 
    var a = 2; 

    let b = 91;
    let b = 92; // uncaught SyntaxError: 'b' has already been declared

    const c = 10;
    const c = 11; // uncaught SyntaxError: 'c' has already been declared
*/


/*

4) Initialization:
  --> you have to initialize const declaration unlike var and let!

    var a; // valid
    let b; // valid
    const c; // missing initializer in const declaration

*/

/*

5) Re-initialization:
  --> you cannot reinitialize or update const unlike let & var!
*/
  var a = 10;
    a = 22; 
    console.log(a) //22

    let b = 32;
    b = 33; 
    console.log(a) // 33

    const c = 10;
    c = 22; 
    console.log(a) // Uncaught TypeErrorL assignment to constant variable


    
/*

6) Hoisting: Hoisting is a phenomena when you access variables or functions even before you have initialized them!
   --> let, var and const declaration are hoisted!
   --> let and const are hoisted in Temporal Dead Zone!

*/

console.log(a) // undefined
var a = 10;

// above code interpreted to browser like this:
var a;
console.log(a)
var a = 10;






















/* padStart & padEnd */

// padStart --> Pads on start of the string with another string until it reaches its length

// padEnd --> Pads on the end of the string with another string until it reaches its length 

/*
const a = 'Raj'
console.log(a.padStart(8, 'y')) //yyyyyRaj

const str1 = '5'
console.log(str1.padStart(2,0)) // 05


const mobileNo = '9988776633';
const last4No = mobileNo.slice(-4);
const hiddenNo = last4No.padStart(mobileNo.length, '*')
console.log(hiddenNo) // ******6633


const name = 'Rakaa'
const name2 = name.padEnd(10) // 'Rakaa     '
console.log(name2.length) // 10
*/

