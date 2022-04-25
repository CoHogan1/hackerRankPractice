function runningTime(arr){
    let n = arr.length
    let count = 0
    for (let i = 1; i < n; i++) {

        let cur = arr[i]
        let j = i - 1

        while ((j > -1) && (cur < arr[j])){
            arr[j+1] = arr[j]
            j--
            count++
        }
        arr[j+1] = cur
    }
    return count
}

console.log(runningTime([2,1,3,1,2]))
