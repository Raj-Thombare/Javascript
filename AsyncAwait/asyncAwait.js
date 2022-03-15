// fetch('raj.json').then( (response) => {
//     console.log(response)
//     return response.json()
// }).then(json => {
//     console.log(json)
// }).catch(err => {
//     console.log(err)
// })

// Async Await
const fetchData = () => {
    return fetch('raj.json')
}

const getData = async () => {
    const response = await fetchData();
    const data = await response.json();
    return data
}

getData()
    .then(data => console.log(data))
    .catch(err => console.log(err))


// Promise Chaining

// const getSomething = (data) => {
//     return new Promise((resolve, reject) => {
//         resolve(data);
//         // reject("Error");
//     })
// }

// getSomething("promise 1 resolved!").then((data)=>{
//     console.log(data)
//     return getSomething("promise 2 resolved!")
// }).then((data)=>{
//     console.log(data)
//     return getSomething("promise 3 resolved!")
// }).then((data)=>{
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })