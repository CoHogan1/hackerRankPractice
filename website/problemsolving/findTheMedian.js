function findMedian(arr){
    let sort = arr.sort((a,b) => a - b)
    let med
    if (sort.length % 2){
        med = Math.floor(sort.length / 2)
    } else {
        med = Math.ceil(sort.length / 2)
    }
    return sort[med]
}

console.log(findMedian([5,3,1,2,4]))
console.log(findMedian([0,1,2,4,6,5,3]))


// one liner
const second = (arr) => {
    // return arr.sor(function(a,b){return a-b})[Math.floor(arr.length / 2)] // diff syntax
    return arr.sort((a,b) => a - b)[Math.floor(arr.length / 2)]
}
console.log(second([5,3,1,2,4]))
console.log(second([0,1,2,4,6,5,3]));
