// find the biggest subset of arrays where the absolute diff is 1

function pickingNumbers(a) {
    let memo = a.sort((a,b) => a - b)
    let i = 0
    let z = 0

    while(i < memo.length && z < memo.length){

        if (Math.abs(memo[i] - memo[z]) > 1){
            i++
            z++
        } else {
            z++
        }
    }

    return Math.abs(i-z)
}

console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]))
console.log(pickingNumbers([-1,-3,-2,-4,-5,2,9]))
