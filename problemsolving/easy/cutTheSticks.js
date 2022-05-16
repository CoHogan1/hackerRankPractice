
function cutTheSticks(arr){
    let ans = []
    while (arr.length > 0){
        let cut = Math.min(...arr) // get cut size.
        // total number of cuts per arr
        ans.push(arr.length)
        // lowers each value by cut lentgh.
        let minus = arr.map(a => a -= cut)
        // remove piecec cut too small to cut again.
        let remove = minus.filter(a => a > 0)
        arr = remove
    }

    return ans

}
// console.log(cutTheSticks([1,2,3]),['ans',3,2,1])
// console.log(cutTheSticks([5,4,4,2,2,8]),['ans',6,4,2,1])
console.log(cutTheSticks([1,12,2,8,14,9,4,4]),['a',8,7,6,4,3,2,1])
