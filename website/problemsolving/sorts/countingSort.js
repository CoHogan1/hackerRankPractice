function countSort(arr){
    let size = arr.length < 101 ? arr.length : 100
    let ans = new Array(size).fill(0)
    arr.map(x => ans[x]++ )
    return ans
}


console.log(countSort([1,1,3,2,1]));
