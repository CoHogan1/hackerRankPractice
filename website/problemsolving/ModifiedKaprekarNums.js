const k2 = (p,q) => {
    let ans = []
    for (let i = p; i <= q; i++) {
        const square = (i * i).toString()
        // substring is like slice....
        let right = square.substring(   square.length - i.toString().length)
        let left  = square.substring(0, square.length - i.toString().length)
        if(parseInt(right) + parseInt(left || 0) === i) {
            ans.push(i)
        }
    }
    // for my log tests
    if (ans.length > 0){
        return ...ans
    } else {
        return 'INVALID RANGE'
    }

    // for hackerranks tests....
    // if (ans.length > 0){
    //     console.log(...ans) // weird I know...
    // } else {
    //     console.log('INVALID RANGE')
    // }
}

console.log(k2(1,100), ['ans',1,9,45,55,99])

// function kaprekarNumbers(p,q){
//     let count = []
//     let red
//
//     for (var i = p; i < q; i++) {
//         let square = (i*i).toString()
//
//         if (square.length % 2 != 0){ // odd len square
//             red = square.split('').reduce((a,b)=> parseInt(a) + parseInt(b))
//             //console.log(i, square, red, " this");
//
//         } else {
//             let one = square.slice(0, square.length / 2)
//             let two = square.slice(square.length /2)
//             //console.log(one, two, square, " this")
//             red = parseInt(one) + parseInt(two)
//         }
//
//         if (red === i){
//             count.push(i)
//         }
//     }
//     return count
// }
