/* Set & Map */

// Set --> It return an Object with unique values!

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


// Map --> It return an Object with unique values!
























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