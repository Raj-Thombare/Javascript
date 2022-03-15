// Template Literals

// const firstName = "Raj"
// const lastName = "Thombare"

// console.log(firstName + " " + lastName)
// console.log(`${firstName} ${lastName}`)


// Array Destructuring

// const myArray = ["Rohit", "Bairstow", "Stokes"];
// let [bat, wk, all] = ["Rohit", "Bairstow", "Stokes"];
// console.log(bat, wk, all)
// wk = 'pant';
// console.log(bat, wk, all)


// Object Destructing

// const cricketer = {
//     fName: 'Rohit',
//     lName:'Sharma',
//     jerseyNo: 45
// };

// const {fName, lName, jerseyNo} = cricketer;
// console.log(fName, lName, jerseyNo)//Rohit Sharma 45

// const {fName:fn, lName:ln, jerseyNo:jno} = cricketer;
// console.log(fn, ln, jno)

// Object Literal

// function addressMaker(state, city){
//     // const newAddress = {newState:state, newCity:city}
//     const newAddress = {state, city};

//     console.log(newAddress)
// }

// addressMaker("Karnataka", "Banglore")

// function addressMaker(address){
//     const {city, state} = address;
//     const newAddress = {
//         city,
//         state,
//         country: 'India'
//     };

//     console.log(`${newAddress.city},${newAddress.state},${newAddress.country}`)
// }

// addressMaker({state:"Karnataka", city:"Banglore"});

// For of loop

// const names = ['raj','rakaa','rohit',"bairstow", "stokes"]
// names.bowl = 'Bumrah'

// for(let name of names){
//     console.log(name) // 'raj', 'rakaa', 'rohit', 'bairstow', 'stokes'
// }

// for(let name in names){
//     console.log(name) // 0 1 2 3 4
// }

// For of VS For in
// For of --> used on iterables such as Arrays --> returns values
// For in --> used on enumerables i.e., objects --> returns indexes & properties(keys)

var numbers = [10,20,30]

// for(let i of numbers){
//     i += 100;
    
// }

console.log(numbers)

