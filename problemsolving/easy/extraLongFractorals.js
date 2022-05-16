// BigInt is js library to help preform math on large numbers.

function extraLongFractorals(n){
    let bigI = BigInt
    let value = 1
    for (let i = n; i >= 1; i--){
        value = bigI(value) * bigI(i)
    }
    console.log(value.toString())
    //return value.toString()
}
console.log(extraLongFractorals(30))
