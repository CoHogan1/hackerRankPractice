
function fairRations(B){
    let pure = [...B]
    let mod = B.map(x => x % 2)
    let counter = 0
    for (let i = 0; i < mod.length; i++) {
        if (mod[i] === 1){
            counter++
        }
    }
    if (counter % 2 != 0) {
        return "NO"
    }
    counter = 0
    while (pure.evry(x => x % 2 === 1)){
        pure[counter]++
        pure[counter + 1] ++
        counter++
    }
    return counter
}

console.log(fairRations([4,5,6,7]))
console.log(fairRations([2,3,4,5,6]),4)
console.log(fairRations([1,2]),"NO")


let x = [ 2,2,4]


console.log(x.every(x => x % 2 === 0));
