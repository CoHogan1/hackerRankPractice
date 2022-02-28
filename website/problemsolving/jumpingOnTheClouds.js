
function jumpingOnCoulds(c){
    let jump = 0
    for (let i = 0; i < c.length; i++) {
        jump++
        if (c[i + 2] != 1 && c[i + 2] <= c.length -1){
            i++
        }
    }
    return [jump - 1, 'jumps']
    // return jump -1
}

//console.log(jumpingOnCoulds([0,0,0,0,0]));

console.log(jumpingOnCoulds([0,0,0,1,0,0]),  3)
console.log(jumpingOnCoulds([0,1,0,0,0,1,0]), 3)
console.log(jumpingOnCoulds([0,0,1,0,0,1,0]), 4)
