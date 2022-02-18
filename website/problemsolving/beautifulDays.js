
function beautifulDays(i, j, k) {
    let daysCount = 0

    for (let z = i; z <= j; z++) {
        let rev = z.toString().split('').reverse().join('')
        if (Math.abs(z - parseInt(rev)) % k === 0){
            daysCount++
        }
    }
    return daysCount
}

console.log(beautifulDays(20,23,6), 2)
console.log(beautifulDays(13,45,3), 33)
