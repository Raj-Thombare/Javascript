/* Set & Map */

// Set --> It return an Object with unique values!
/*

const uniqueNumbers = new Set();

uniqueNumbers.add(31)
uniqueNumbers.add(11)
uniqueNumbers.add(11)
uniqueNumbers.add(45)

console.log(uniqueNumbers) // {31, 11, 45}

console.log(uniqueNumbers.has(45)) // true
console.log(uniqueNumbers.has(12)) // false

const numbers = [10, 50, 30, 40, 50]
const uniqueValues = new Set(numbers)
console.log(uniqueValues) // {10, 50, 30, 40}

console.log(Array.from(uniqueValues)) // [10, 50, 30, 40]
*/

/* 

Map --> It's a collection type similar to Objects which holds key-value pairs but what differentiates it from objects is, it remembers the order of insertion! it has some built in properties for insertion, deletion, to get size or to get values! you can store Function in keys which you cannot in objects! Map is iterable, objects are not iterables so you have to use For..in loop to iterate over objects but in Map you can use simple For..of loop

--> There are 2 Maps in JavaScript, one is this one which is collection type i.e object and other one is an Array method!

*/
 const cricketers = new Map();
 cricketers.set('Raj Thombare','All-Rounder')
 cricketers.set('Rohit Sharma','batsmen')
 cricketers.set('Johnny Bairstow','Wk-batsmen')
 cricketers.set('Ben Stokes','All-Rounder')
 cricketers.set('Jofra Archer','Bowler')

 console.log(cricketers.size) // 5
 console.log(cricketers) //{'Raj Thombare' => 'All-Rounder'...}
 console.log(cricketers.get('Johnny Bairstow')) // Wk-batsmen
 console.log(cricketers.delete('Jofra Archer')) // True
 console.log(cricketers) // jofra archer deleted from Map


/*  Object vs. Map()

1) You can iterate over Map() but cannot iterate over objects as they are non-iterable!

for(const [name,type] of cricketers){
    console.log(`${name} is a ${type}`) // Raj Thombare is a All-Rounder...
}

// You have to use For..in loop to iterate over Objects

2) A Maps() key value can be anything such as Objects, Functions or any primitives but key of an Object must be a String!

3) Map() remembers the insertion order and gives data in correct order while it's no guaranteed incase of Objects

4) Map() has some built-in properties like delete, get, set, size... unlike Objects which makes Map() much better than Objects 

*/

/*
Array Methods --> Find & FindIndex 
These both methods return an object!
*/

/*
// Find
const players = [{name:'Rakaa'}, {name:'Raj'}, {name:'Rohit'}]

const result = players.find(user => {
    return user.name === 'Rakaa'
})

console.log(result) // {name:Rakaa}

// FindIndex

const indResult = players.findIndex(index => {
    return index.name === 'Rohit'
})

console.log(indResult) // 2

// Example 2

const bowlers = ['Hazlewood','Woaks', 'Stokes']

const bowler = bowlers.findIndex(bowler => {
    return bowler === 'Hazlewood'
})
console.log(bowler) // 0
*/