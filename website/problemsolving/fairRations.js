
function fairRations(B){
    let distributions = 0

    B.forEach((per, ind)=>{
        if (per % 2 != 0){ // odd
            B[ind]++
            B[ind + 1]++
            distributions += 2
        }
    })
    console.log(B, " end result")

    return distributions
}

console.log(fairRations([4,5,6,7]))
console.log(fairRations([2,3,4,5,6]),4)
