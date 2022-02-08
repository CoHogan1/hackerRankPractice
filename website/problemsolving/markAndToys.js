



function maximumToys(prices, k) {
    let sort = prices.sort((a,b) => a - b)
    let total = 0
    let toys = 0

    sort.forEach((toy, index)=>{
        if ((total + toy) <= k){
            total += toy
            toys++
        }
    })
    console.log(toys);
    return toys
}



maximumToys([1,2,3,4], 7)
