const test = async () => {
    // const response = await fetch('raj.json');
    // const data = await response.json();
    return (await fetch('raj.json')).json()
}

test()
    .then(data => console.log(data))
    .catch(err => console.log(err))


// suppose if you are calling test() multiple times then you always need to use .catch() method if any error occurs or promise gets rejected! instead what you can do is, you can use try{}catch{}

const test1 = async () => {
    try{
        return (await fetch('raj.json')).json()
    }catch(err){
        console.log(err)
    }
}

test1().then(data => console.log(data))



