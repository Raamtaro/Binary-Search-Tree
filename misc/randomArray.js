const randomArray = () => { //Very Basic Method

    let underOneHundred = []
    for (let i =0; i < 25; i++){

        underOneHundred.push(Math.floor(Math.random()*100))
    }

    return underOneHundred
}

const cryptoRandomArray = () => { //I went down a rabit-hole method

    let array = new Uint8Array(25) //An array of 25 8-bit unsigned integers
    crypto.getRandomValues(array) //Fill it with random values
    return Array.from(array).map(int => int % 100)
}

export {randomArray, cryptoRandomArray}