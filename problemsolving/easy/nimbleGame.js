function nimbleGame(s){
    let x = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2){
            x ^= i
        }
    }
    return x ? "First" : "Second"
}
console.log(nimbleGame([0,2,3,0,6]))
