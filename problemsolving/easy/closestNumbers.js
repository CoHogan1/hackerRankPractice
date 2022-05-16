function closestNumbers(arr){
    let copy = arr.sort((a,b) => a - b)
    let ans = []
    let abs = 9999999999

    for (let i = 0; i < copy.length -1; i++) {
        if (Math.abs(copy[i] - copy[i+1]) < abs){
            abs = Math.abs(copy[i] - copy[i+1])
        }
    }

    for (let i = 0; i < copy.length -1; i++) {
        if (abs === Math.abs(copy[i+1] - copy[i]) ){

            ans.push(copy[i], copy[i+1])
        }
    }
    return ans
}

console.log(closestNumbers([5,2,3,4,1]))
console.log(closestNumbers([-20,-3916237,-357920,-3620601,7374819, -7330761, 30, 6246457, -6461594, 266845]))


const second = (arr) => {
    let ans = []
    let abs = Infinity
    let copy = arr.sort((a,b) => a-b)

    for (let i = 0; i < copy.length; i++) {
        let d = copy[i+1] - copy[i]
        if (d < abs) { ans = [], abs = d}
        if (d <= abs) {ans.push(copy[i], copy[i+1])}
    }
    return ans
}

console.log(second([5,2,3,4,1]))
console.log(second([-20,-3916237,-357920,-3620601,7374819, -7330761, 30, 6246457, -6461594, 266845]))
