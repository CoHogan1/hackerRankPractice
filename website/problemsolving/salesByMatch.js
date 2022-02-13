

function sockMerchant(n, ar) {
    let memo = {}
    let pairs = 0
    ar.forEach((data, index)=>{
        (memo[data] ? memo[data]++ : memo[data] = 1)
        if (memo[data] === 2){
            pairs++
            memo[data] = 0
        }
    })
    console.log(memo,pairs)
    return pairs
}


sockMerchant(7,[1,2,1,2,1,3,2])
