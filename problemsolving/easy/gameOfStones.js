function gameOfStones(n){
    if (n % 7 === 0){
        return "Second"
    } else if ((n-1) % 7 === 0) {
        return "Second"
    }
    return "First"
}
console.log(gameOfStones(5))
