function leftRotation(d, arr){
    for (let i = 0; i < d; i++){
        let temp = arr.shift()
        arr.push(temp)
    }
    return arr
}

let arr = [1,2,3,4,5]
function quicker = (d, arr){
    let first = arr.slice(d)             // [3,4,5]
    return first.concat(arr.slice(0,d))  // [3,4,5] + [1,2]
}
