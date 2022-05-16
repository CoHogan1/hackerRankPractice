// insertion sort
function insertion(n, arr){

    for (let i = 1; i < n; i++) {

        let cur = arr[i]
        let j = i - 1

        while ((j > -1) && (cur < arr[j])){
            console.log(j, cur, arr[j]);
            arr[j+1] = arr[j]
            //console.log(arr.join(' '))
            j--
        }
        arr[j+1] = cur
    }
    return arr.join(' ')
}


console.log(insertion(5, [2,4,6,8,3]))
