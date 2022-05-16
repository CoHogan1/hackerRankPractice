



function divisibleSumPairs(n, k, arr) {
    // let pairs = 0
    // let copy = [...arr].sort()
    //
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < copy[i]; j++) {
    //         if ((copy[j] < copy[i]) && (copy[i] + copy[j]) % k === 0){
    //             pairs++
    //         }
    //     }
    // }
    // return pairs
    let count = 0;

    for(let i = 0; i< n; i++){
        arr.slice(i+1, n).filter((item)=>{
            if((item + arr[i])%k === 0){
                count++
            }
        })
    }
    return count
}


console.log(divisibleSumPairs(6,5,[1,2,3,4,5,6]))
console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]),5)
