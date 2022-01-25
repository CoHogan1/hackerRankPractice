let test = [1000000001,1000000002,1000000003,1000000004,1000000005]


const bigSum = (a) =>{
    let ans = a.reduce((a,b) => a + b)
    console.log(ans);
    return ans
}

bigSum(test)



// let ans = 0
// let len = a[0].length
//
// a.forEach((item, index)=>{
//     ans += item
// })
// console.log(ans)

console.log(Number.MAX_SAFE_INTEGER);
