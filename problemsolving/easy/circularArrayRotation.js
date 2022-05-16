
function circularArrayRotation(a,k, queries){
    let copy = [...a]
    let ans = []
    for (let i = 0; i < k; i++) {
        let last = copy.pop()
        copy.unshift(last)
    }
    queries.forEach((item, index)=>{
        ans.push(a[queries[index]])
    })
    return ans
}

//circularArrayRotation([3,4,5],2,[1,2])

// also fails time....
// function circularArrayRotation(a,k,queries){
//     let ans = []
//     let temp = 0
//     queries.forEach((item, index)=>{
//         if (index + k >  a.length -1){
//             temp = index + k - (a.length - 1)
//             ans[index] = a[temp - 1]
//             console.log(ans[index])
//         } else {
//             ans[index] = a[index + k]
//             console.log(ans[index])
//         }
//     })
// }


// this code passes time.....
// function circularArrayRotation(a, k, queries){
//     let result = []
//     while(k > 0){
//         let tmp = a.pop()
//         a.unshift(tmp)
//         k--
//     }
//     for (let i = 0; i < queries.length; i++) {
//         result.push(a[queries[i]])
//     }
//     return result
// }
console.log(circularArrayRotation([3,4,5],2,[1,2])) ///0.713 max 750, min 650
