// quickSort
// quicksort time complexity. best case 0(n^2) and worst case 0(nlogn)
// the pivot choice determines this factor, for the most part.
// 0(nlogn) running time grows as the data grows.

function quickSort(arr) {
    if (arr.length <= 1){ return arr }
    let left = []
    let right = []
    let pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}
console.log(quickSort([5,4,3,2,1]), "quick")


// mergesort
// mergesort seperates ths arr untill its comparing two pieces of data.
// then combines them again.
// worst case 0(nlogn)
// best case 0(n^2)


function mergeSort(left, right){
    const arr = []
    while(left.length && right.length){
        if (left[0] < right[0]){
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return arr.concat(left.slice().concat(right.slice()))
}

function mergeHelp(arr){
    if  (arr.length <= 1){ return arr }
    let mid = Math.ceil(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return mergeSort(mergeHelp(left),mergeHelp(right))
}


console.log(mergeHelp([5,4,3,2,1]), "mierge");


// mergesort vs quicksort.
//  quck sort selects a value to be the pivot
// merge sort gets the middle element. more or less

function sort(left, right){
    const arr = []
    while(left.length && right.length){
        if (left[0] < right[0]){
            arr.push(left.shift())
        } else {
            arr.push(right.shift)
        }
    }
    return arr.concat(left.slice()).concat(right.slice())
}

function merge(arr){
    if (arr.length <= 1){ return arr }
    let mid = Math.ceil(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return sort(merge(left), merge(right))
}


console.log(merge([1,3,5,7,9,0,8,6,4,2])," this")
