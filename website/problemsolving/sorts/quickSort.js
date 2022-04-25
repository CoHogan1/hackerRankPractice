function quickSort(arr){
    if (arr.length === 0){ return [] }
    let pivot = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }


    return quickSort(left).concat(pivot, quickSort(right))
}


console.log(quickSort([1,4,3,5,6,7,8,2,3,4,2,1,2,4,5,11,10,100]))
