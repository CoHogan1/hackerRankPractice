function maxiizingXor(l,r){
    let max = 0
    for (let i = l; i <= r; i++) {
        for (let z = l; z <= r; z++){
            if (parseInt(i ^ z) > max) { max = parseInt(i ^ z) }
        }
    }
    return max
}
console.log(maxiizingXor(11,12))
