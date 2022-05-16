function chessboardGame(x,y){
    let a = x % 4
    let b = y % 4
    if (a === 0 || b === 0 || a === 3 || b === 3){
        return "First"
    } else {
        return "Second"
    }
}
console.log(chessboardGame(5,2))
