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

const cryptoRandomAdditions = (count) => { //Count is the number of additions that we'll be making to our tree

    let array = new Uint8Array(count);  // create a typed array to hold 'count' 8-bit unsigned integers
    crypto.getRandomValues(array); // fill the array with cryptographically strong random values
    return Array.from(array).map(num => num % (256 - 101) + 101) // 256 because we are using 8-bit numbers
}

export {randomArray, cryptoRandomArray, cryptoRandomAdditions}