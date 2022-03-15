// const promise1 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log("Promise 1 resolved!")
//         resolve(10)
//     }, 1 * 1000)
// })

// const promise2 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log("Promise 2 rejected!")
//         resolve(20)
//     }, 1 * 2000)
// })

// const promise3 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         console.log("Promise 3 resolved!")
//         resolve(30)
//     }, 1 * 3000)
// })
const createPromise = function(data, msg){
    (resolve, reject) => {
        setTimeout(()=> {
            console.log(`Promise ${msg} resolved!`)
            resolve(data)
        }, data * 100)
    }
}

const p1 = new Promise(createPromise(10, "1"))
const p2 = new Promise(createPromise(20, "2"))
const p3 = new Promise(createPromise(30, "3"))


// Promise.all([promise1, promise2, promise3]).then(data => console.log(data)).catch(err => console.log(err))

// Promise.race([promise1, promise2, promise3]).then(data => console.log(data)).catch(err => console.log(err))

// Promise.allSettled([promise1, promise2, promise3]).then(data => console.log(data)).catch(err => console.log(err))