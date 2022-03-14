
function nonD(k,s){
    let factA = Array(k).fill(0)

    for (let i = 0; i < factA.length; i++) {
        factA[s[i] % k] += 1
    }
    console.log(factA);
    let ans = 0

    return ans
}

console.log(nonD(4,[19,10,12,10,24,25,22]))
console.log(nonD(3,[1,7,4,2]))

let x = [1,2,3,4,5,6]
