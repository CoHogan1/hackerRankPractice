function pokerNim(k,c){
    let ans = 0
    for (let i = 0; i < c.length; i++) {
        ans ^= c[i]
    }
    return ans != 0 ? "First" : "Second"

}
console.log(pokerNim(2,5))
