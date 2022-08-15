var findLeastNumOfUniqueInts = function(arr, k) {
    const numCount = new Map()
    for (let num of arr){
        if (numCount.has(num)){
            numCount.set(num, numCount.get(num) +1)
        } else {
            numCount.set(num, 1)
        }
    }

    const uniqueCounts = [...numCount.values()]
    uniqueCounts.sort((a,b) => a-b)

    let removedCount = 0
    let removedUniqueCount = 0

    for (let count of uniqueCounts){
        removedCount += count
        if(removedCount <= k){
            removedUniqueCount += 1
        }
    }
    return uniqueCounts.length - removedUniqueCount
};
