function insertionSort2(n, arr){
    for (let i = 1; i < n; i++) {

        let cur = arr[i]
        let j = i - 1

        while ((j > -1) && (cur < arr[j])){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = cur
        console.log(arr.join(' '))
    }
    return arr.join(' ') + " final"
}
console.log(insertionSort2(6,[1,4,3,5,6,2]))
