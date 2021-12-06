//Given an array of integers, calculate the ratios of its elements that are
//positive, negative, and zero. Print the decimal value of each fraction on a
//new line with  places after the decimal.

// ex arr [1,1,0,-1,-1]

// 0.400000 ~~  1    0.4 is the decimal eqvivalant of the fraction.
// 0.400000 ~~ -1
// 0.200000 ~~  0

let testArr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let pos  = 0
    let neg  = 0
    let zero = 0

    arr.forEach(num =>{
        if(num > 0){
            pos++
        } else if (num === 0){
            zero++
        } else if(num < 0){
            neg++
        }
    })

    let one   = pos  / arr.length
    let two   = neg  / arr.length
    let three = zero / arr.length

    console.log(one.toFixed(6))
    console.log(two.toFixed(6))
    console.log(three.toFixed(6))
}

plusMinus(testArr)
