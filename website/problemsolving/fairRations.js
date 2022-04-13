
function fairRations(B){
    let loaves = 0
    let sub = B.length

    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 === 1){
            B[i]++
            B[i+1]++
            loaves += 2
        }
    }

    if (B[sub -1] % 2 === 0 ){
        return loaves
    } else {
        return "NO"
    }
}

console.log(fairRations([4,5,6,7]))
console.log(fairRations([2,3,4,5,6]),4)
console.log(fairRations([1,2]),"NO")
