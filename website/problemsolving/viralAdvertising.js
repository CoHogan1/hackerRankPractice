

function viralAdvertising(n) {
    let totalShares = 5
    let totalLikes  = 0
    let total = 0

    for (let i = 0; i < n; i++) {
        console.log(totalShares, totalLikes, total)
        totalLikes = Math.floor(totalShares / 2)
        totalShares = totalLikes * 3
        total = total + totalLikes
    }
    return total

}

console.log(viralAdvertising(3), 9)
console.log(viralAdvertising(5), 24)
