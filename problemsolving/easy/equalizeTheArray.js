
function equalizeAray(arr){
    let memo = 0

    for (let i = 0; i < arr.length; i++) {
        let total = arr.filter(num => num === arr[i]).length
        if (total > memo){
            memo = total
        }
    }
    return arr.length - memo
}


console.log(equalizeAray([1,2,2,3]), 2)
console.log(equalizeAray([96,96,45,52,73,44,51,96]), 5)
