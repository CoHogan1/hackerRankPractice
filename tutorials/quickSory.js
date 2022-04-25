const quicksort = (arr) => {
    if (arr.length == 0) return []

    let left = []
    let right = []
    let pivot = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quicksort(left).concat(pivot, quicksort(right))
}

let test = [1,4,3,5,6,7,8,2,3,4,2,1,2,4,5,11,10,100]


console.log(quicksort(test))
//
// let arr = [1,2,3,4,5]
// let mid = Math.ceil(arr.length / 2)
// let left = arr.slice(0,mid)
// let right = arr.slice(mid)
//
// console.log(left, right);

function merge(left, right){
    let sorted = []

    while(left.length && right.length){
        if(left[0] > right[0]){
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}


const counting = (a) => {
    if (a.length === 0){ return a}
    let mid = Math.ceil(a.length / 2)
    let left = a.slice(0,mid)
    let right = a.slice(mid)
    return merge(
        counting(left),
        counting(right)
    )
}


console.log(counting([1,2,3,4,5,10]), 0);
console.log(counting([2,1,3]), 1);
