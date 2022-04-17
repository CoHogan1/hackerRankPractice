// insertion sort
function insertion(n, arr){
    for (let i = 1; i < n; i++){
        let current = arr[i]
        let j = i - 1
        while ((j > -1) && (current < arr[j])){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}


console.log(insertion(5, [5,2,4,6,1,3]))
