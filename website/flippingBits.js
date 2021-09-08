// You will be given a list of 32 bit unsigned integers. Flip all the bits
// ( and ) and return the result as an unsigned integer.

let test = 86420

function flippingBitz(n){
    let pure = n
    let answer = []

    while (pure > 0){
        pure = pure / 2
        if (Number.isInteger(pure)){
            // no remainder
            let bit  = 0
            answer.push(bit)
        } else {
            // reaminder
            let bit = 1
            answer.push(bit)
            pure = Math.floor(pure)
        }
    }
    answer.reverse()

    while (answer.length < 32){
        answer.unshift(0)
    }

    console.log(answer)
    console.log(answer.length)
}



//flippingBitz(test)

// let num = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0]
// let index = num.indexOf(1) // 15
//
// let sli = num.slice(15)
// // sli length is 17
//
// let flipped = 0
//
// sli.forEach((item, index)=>{
//     if (item === 1){
//         console.log(1)
//
//
//     } else if (item === 0){
//         console.log(0)
//         // times 2
//
//     } else {
//         console.log("Achievement--- How did we get here?")
//     }
// })



//console.log(Math.ceil(1/2))


const convertNumber = (num) =>{
    const numToBit = (num >>> 0).toString(2) // convert to 32 bit int
    const bitArray = numToBit.split('') // turn into an array for data manipulation
    let flippedArray = []
    let finalNumber = 0

    // fill ararry to proper size
    while (bitArray.length < 32){
        bitArray.unshift('0')
    }

    bitArray.forEach(item =>{
        if (item === '0'){
            flippedArray.push('1')
        } else {
            flippedArray.push('0')
        }
    })

    flippedArray.forEach(item =>{
        if (item === '1'){
            finalNumber = (finalNumber * 2) + 1
            console.log(finalNumber)
        } else {
            finalNumber = finalNumber * 2
            console.log(finalNumber)
        }
    })

    console.log(finalNumber)
}

convertNumber(test)
