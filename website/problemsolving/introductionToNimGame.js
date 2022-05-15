function nimGame(pile){
    let ans = 0
    for (let i = 0; i < pile.length; i++) {
        ans ^= pile[i]
    }
    return ans ? "First" : "Secons"
}
console.log(nimGame([2,1,4]))
