const Button = document.querySelector("#button")
const output = document.querySelector("#output")

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Data')
        }, duration)
    })
    return promise
}

const getPosition = () => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success)
        }, error => {
            reject(error)
        })
    })
    return promise
}

async function trackUser(){
    const posData = await getPosition();
    const timerData = await setTimer(2000);
    console.log(timerData, posData)

    // let positionData;
    // getPosition()
    //     .then(posData => {
    //         positionData = posData;
    //         return setTimer(2000)
    //     }).then(data=> {
    //         console.log(data, positionData)
    //     }).catch(err => {
    //         console.log(err)
    //     });
    // setTimer(1000).then(data => {
    //     console.log('Timer Done!')
    // })
    // console.log("Getting position.....")
}

Button.addEventListener('click', trackUser)