function luckBalance(k, contests){
    let copy = [...contests].sort((a,b) => b[0] - a[0])// reverse order.

    let luck = 0

    for (let i = 0; i < copy.length; i++) {
        if (copy[i][1] === 0){
            luck += copy[i][0]
        } else if (k > 0){
            luck += copy[i][0]
            k--
        } else {
            luck -= copy[i][0]
        }
    }
    return luck
}
console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))
