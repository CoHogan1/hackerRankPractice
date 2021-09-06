// You will be given a list of 32 bit unsigned integers. Flip all the bits
// ( and ) and return the result as an unsigned integer.



let test = 86420
let answer = []
let ggg = 0

while (test > 0){
    test = test / 2
    if (Number.isInteger(test)){
        // no remainder
        ggg = 0
        answer.push(ggg)
        //test = Math.floor(test)

    } else {

        ggg = 1
        answer.push(ggg)
        test = Math.floor(test)
    }
}

console.log(answer.reverse())

console.log([1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0]);
