function queensAttack(n, k, r_q, c_q, obstacles){
    let o = [...obstacles]
    let x = []
    // populate board
    for (let i = 0; i < n; i++) {
        x.push([])
        for (let z = 0; z < n; z++){
            x[i].push([z % 2 ^ i % 2])
            //x[i].push("-")
        }
    }
    let count = 0
    x.map(x => x.forEach(x => x < 1 ? count++ : null))
    //place queens position.
    // x[r_q -1][c_q -1] = "Q"
    //
    // // place obstacles
    // for (let i = 0; i < o.length; i++) {
    //     let a = o[i][0] -1
    //     let b = o[i][1] -1
    //     x[a][b] = "X"
    // }
    //console.log(count - 1 - o.length)

    return x
}
console.log(queensAttack( 5,3,4,3, [[5,5],[4,2],[2,3]] ))


// let x = []
//
// for (let i = 0; i < 5; i++) {
//     x.push([])
//     for (let z = 0; z < 5; z++){
//         x[i].push([i,z])
//     }
// }
// console.log(x)


// let x = [ [1],[2],[3] ]
//
// if ( x.includes(1) ){
//     console.log("YES");
// } else {
//     console.log('nope');
// }

// [
//   [ '-', '-', '-', '-', '-' ],
//   [ '-', '-', 'X', '-', '-' ],
//   [ '-', '-', '-', '-', '-' ],
//   [ '-', 'X', 'Q', '-', '-' ],
//   [ '-', '-', '-', '-', 'X' ]
// ]

//['-','-','-','-','-'],['-','-','X','-','-'],['-','-','-','-','-'],['-','X','Q','-','-'],['-','-','-','-','X']


// [
//   [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 0, 4 ] ],
//   [ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ] ],
//   [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ], [ 2, 4 ] ],
//   [ [ 3, 0 ], [ 3, 1 ], [ 3, 2 ], [ 3, 3 ], [ 3, 4 ] ],
//   [ [ 4, 0 ], [ 4, 1 ], [ 4, 2 ], [ 4, 3 ], [ 4, 4 ] ]
// ]
