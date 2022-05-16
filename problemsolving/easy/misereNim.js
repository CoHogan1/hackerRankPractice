function misereNum(s){
    let xor = s[0]
    let totalS = s[0]

    for (let i = 1; i < s.length; i++) {
        totalStones += s[i]
        xor = xor ^ s[i]
    }

    if (totalS === s.length){
        return totalS % 2 === 0 ? "First" : "Second"
    }

    return xor ? "First" : 'Second'
}

console.log(misereNum(3))
