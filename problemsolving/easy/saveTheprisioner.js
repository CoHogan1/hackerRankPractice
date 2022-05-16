
// n num of prisioners
// m pieces of candy
// s the chair to start passing around the candy.

// function saveThePrisioner(n,m,s){
//     let count = s
//     for (let i = 1; i < m; i++) {
//         count++
//         if (count > n){
//             count = 1
//         }
//     }
//     return count
// }

function saveThePrisioner(n,m,s){
    let last = 0
    last = (m + s - 1) % n
    if (last === 0){ last = n}
    return last
}

console.log(saveThePrisioner(4,  6, 2),  3)
console.log(saveThePrisioner(7, 19, 2),  6)
console.log(saveThePrisioner(3,  7, 3),  3)
