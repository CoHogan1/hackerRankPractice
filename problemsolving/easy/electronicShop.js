
function getMoneySpent(keyboards, drives, b) {
    let total = -1
    for (let i = 0; i < key.length; i++) { // k[0]
        for (let z = 0; z < drives.length; z++) {
            let value = key[i] + dri[z]
            if (value > total && value <= b){
                total = value
            }
        }
    }
    return total
}


console.log(getMoneySpent([40,50,60],[5,8,12],60), 58)
console.log(getMoneySpent([4],[5],5), -1)
console.log(getMoneySpent([3,1],[5,2,8],10), 9)
