function sumXor(n){
    // fails on time....
    if (n.length === 1){ return  1 }
    let count = 0
    for (let i = 0; i <= n; i++) {
        if (n + i === parseInt(n ^ i)){
            count++
        }
    }
    return count
}
console.log(sumXor(4))

const second = (n) => {
    const na = Number(n).toString(2)
    if (na.length === 1){ return 1 }
    return 2 ** na.match(/0/g).length
}
console.log(second(4))
console.log(second(5))
console.log(second(10))
