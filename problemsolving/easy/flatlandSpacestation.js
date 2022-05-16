// this is to keep main funciton clean. actual function below QS.
//
const quickSort = (arr) => {
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
    return quickSort(left).concat(pivot, quickSort(right))
}

// passes all test cases
function flatlandSpaceStations(n,c) {
    if (n === c.length - 1) { return 0 }
    let sort = quickSort(c)
    let maxLen = sort[0]

    for (let i = 0; i < sort.length; i++){
        let memo = Math.floor(Math.abs(sort[i + 1] - sort[i]) / 2)
        if (memo > maxLen){ maxLen = memo }
    }
    let end = Math.abs(n - sort[sort.length -1]) - 1
    return Math.max(maxLen, end)
}

console.log(flatlandSpaceStations(6,[0,1,2,3,4,5]), 0)
console.log(flatlandSpaceStations(5,[0,4]), 2)
console.log(flatlandSpaceStations(20,[13,1,11,10,6]),6)
console.log(flatlandSpaceStations(100,[93,41,91,61,30,6,25,90,97]), 14)
