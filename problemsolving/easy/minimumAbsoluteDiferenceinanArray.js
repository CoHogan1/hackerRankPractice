function miniAbsDiff(arr){
    let copy = arr.sort((a,b) => a-b)
    let min = Infinity

    for (let i = 0; i < copy.length -1; i++) {
        let diff = Math.abs(copy[i+1] - copy[i])
        if (diff < min){ min = diff}
        if (diff = 0){ return 0}

    }
    return min
}
console.log(miniAbsDiff([-2,2,4])) // 2
console.log(miniAbsDiff([3,-7,0])) // 3
