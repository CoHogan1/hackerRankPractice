// s = start point, t is end point
// a point of apple tree
// b point of orange tree

// the d value means left, and positive means right.

// apples need to be pos, and ornages need to be neg.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let copy = [...apples]
    let memo = [...oranges]
    let count = [0,0]

    copy.forEach((d,i)=>{
        //copy[i] = copy[i] + a
        if (copy[i] + a <= t && copy[i] + a >= s){
            count[0]++
        }
        //memo[i] = memo[i] + b
        if (memo[i] + b <= t && memo[i] + b >= s){
            count[1]++
        }
    })

    //console.log(count[0],count[1]);
    return count[0], count[1]
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let copy = [...apples]
//     let memo = [...oranges]
//     let count = []
//
//
//     copy.forEach((d,i)=>{
//         copy[i] = copy[i] + a
//
//         if (copy[i] <= t && copy[i] >= s){
//             count[0] = count[0] ? count[0] + 1 : 1
//         }
//         memo[i] = memo[i] + b
//         if (memo[i] <= t && memo[i] >= s){
//             count[1] = count[1] ? count[1] + 1 : 1
//         }
//     })
//
//     console.log(count[0],count[1]);
//     return count[0], count[1]
//
//
// }



// let count = [0,0]
//
// apples.forEach((d,i)=>{
//     if (apples[i] + a <= t && apples[i] + a >= s){
//         count[0]++
//     }
// })
// oranges.forEach((d,i)=>{
//     if (oranges[i] + b <= t && oranges[i] + b >= s){
//         count[1]++
//     }
// })
// console.log(count[0])
// console.log(count[1])
// //return count[0], count[1]
