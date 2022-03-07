function quickSort(arr){
    if (arr.length === 0){ return []}
    let left = []
    let right = []
    let pivot = arr[0] // argue over this

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}
//console.log(quickSort([8,7,3,5,4,2,1,6,9,0])) // test quickSort()

function maxMin(k, arr) {
    let sort = quickSort(arr)
    let ans = 10000000000 // Number.MAX_NUMBER ??
    for (let i = 0; i < sort.length; i++) {
        let diff = sort[i + k - 1] - sort[i]
        if (diff < ans){ ans = diff}
    }
    return ans
}

console.log(maxMin(4, [9,3,8,7,3,1]), 'ans = 5')
console.log(maxMin(3, [10,100,300,200,1000,20,30]), 'ans = 20')
