// function largestPremutation(k , arr){
//     let copy = [...arr]
//     let max = Math.max(...arr)
//
//     for (let i = 0; i < k; i++){
//         let ind = copy.indexOf(max - i);
//         [copy[i], copy[ind]] = [copy[ind], copy[i]]
//     }
//     return copy
// }
// console.log(largestPremutation(1, [1,2,3,4]))
// console.log(largestPremutation(1, [4,2,3,5,1]))
// fails on time....


const second  = (k, arr) => {
    let sorted = [...arr].sort((a,b) => b - a)
    
    // function
    const swap = (a,b) => ([arr[a], arr[b]] = [arr[b], arr[a]]) && k--;

    for (let i = 0; i < arr.length && k > 0; i++) {
        if (arr[i] === sorted[i]){ continue };
        swap(i, arr.indexOf(sorted[i], i));
    }
    return arr
}

console.log(second(1, [1,2,3,4]))
