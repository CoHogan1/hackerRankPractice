
function mergeSort(left, right){
    const array = []
    while(left.length && right.length){
        if (left[0] < right[0]){
            array.push(left.shift())
        } else {
            array.push(right.shift())
        }
    }
    return array.concat(left.slice()).concat(right.slice())
}

const merge = (arr) => {
    if (arr.length === 1) { return arr}
    let mid = Math.ceil(arr.length / 2) // floor right is bigger arr.
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return mergeSort(merge(left),merge(right))
}

let test = [1,3,5,7,9,0,8,6,4,2]

//console.log(merge(test))
