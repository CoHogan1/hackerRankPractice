function toys(w){
    let sort = w.sort((a,b) => a-b)
    let crates = 1
    let lowest = sort[0]

    for (let i = 0; i < sort.length; i++) {
        if (sort[i] > lowest + 4){
            lowest = sort[i]
            crates++
        }
    }
    return crates
}
console.log(toys([1,2,3,4,5,10,11,12,13]))
console.log(toys([12,15,7,8,19,24]))
