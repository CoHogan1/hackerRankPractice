function maximumToys(prices, k){
    let sort = [...prices].sort((a,b) =>  a-b)
    let ans = []


    for (let i = 0; i < sort.length; i++) {
        k -= sort[i]
        if (k > 0){
            ans.push(sort[i])
        } else {
            break
        }
    }
    return ans.length
}
console.log(maximumToys([1,2,3,4], 7))
console.log(maximumToys([1,12,5,111,200,1000,10], 50))
