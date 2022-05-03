function missingNumbers(arr, brr){
    for (var i = 0; i < arr.length; i++) {
        brr.splice(brr.indexOf(arr[i]), 1)
        console.log(brr)
    }
    let ans = [...new Set(brr)]
    return ans

}

console.log(missingNumbers([7,2,5,3,5,3],[7,2,5,4,6,3,5,3]))
//console.log(missingNumbers([3,4,5,6,7,8,3,4,5,6],[3,4,4,5,6,7,5,8,3,6,5,6,4]));


// 7,2,5,4,6,3,5,3
// 7,2,5,3,5,3
