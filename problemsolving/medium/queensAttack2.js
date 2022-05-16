function queensAttack(n, k, r_q, c_q, obstacles){
    let o = [...obstacles]
    let x = []
    // populate board
    for (let i = 0; i < n; i++) {
        x.push([])
        for (let z = 0; z < n; z++){
            x[i].push("-")
        }
    }

    // place queens position.
    x[r_q -1][c_q -1] = "Q"




    // place obstacles
    for (let i = 0; i < o.length; i++) {
        let a = o[i][0] -1
        let b = o[i][1] -1
        x[a][b] = "X"
    }
    return x
}
console.log(queensAttack( 5,3,4,3, [[5,5],[4,2],[2,3]] ))


let x = []

for (let i = 0; i < 5; i++) {
    x.push([])
    for (let z = 0; z < 5; z++){
        x[i].push([i,z])
    }
}
console.log(x)
