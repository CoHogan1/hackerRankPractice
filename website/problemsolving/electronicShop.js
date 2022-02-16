

function getMoneySpent(keyboards, drives, b) {
    // sort arrs
    let key = keyboards.sort((a,b)=> a-b)
    let dri = drives.sort((a,b)=> a-b)
    let total = 0

    if (key[0] > b || dri[0] > b || key[0] + dri[0] > b){
        return -1
    }

    // assumung both key and dri arrays are same length.
    for (let i = 0; i < key.length; i++) { // k[0]
        for (let z = 0; z < drives.length; z++) {
            let value = key[i] + dri[z]
            if (value > total && value < b){
                total = value
            }
        }
    }
    return total
}


console.log(getMoneySpent([40,50,60],[5,8,12],60))
