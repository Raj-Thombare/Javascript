/*
Array Methods --> Find & FindIndex 
These both methods return an object!
*/


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
