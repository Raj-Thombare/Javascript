const getData = () => {
    const promise = new Promise((resolve, reject)=> {
        const data = fetch('/raj.json').then(response => response.json())
        resolve(data)
    })
    return promise
}

getData().then(data => console.log(data))
.catch(err => console.log(err))


// const getData = async () => {
//     try {
//         const response = await fetch('/raj.json');
//         const data = await response.json();
//         return data
//     }catch(err){
//         console.log(`Error is :${err} `)
//     }
// }

// getData().then(data => console.log(data))