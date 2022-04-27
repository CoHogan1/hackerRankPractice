function gOT(s){
    let memo = {}
    s.split('').map(x => {
        memo[x] ? memo[x]++ : memo[x] = 1
    })
    let x = Object.values(memo).map(x => x % 2)
    let y = x.reduce((a,b) => a+b)

    if (s.length % 2 === 0 && y === 0){
        return "YES"
    } else if (s.length % 2 === 1 && y === 1){
        return "YES"
    } else {
        return "NO"
    }
}


console.log(gOT('aaabbbb')) // yes
console.log(gOT('cdcdcdcdeeeef')) // yes
console.log(gOT('aaabbb')) // no



const second = (s) => {
    let l = new Set()
    s.split('').forEach(s => l.has(s) ? l.delete(s) : l.add(s))
    return l.size > 1 ? "NO" : "YES"
}

console.log(second('aaabbbb'))
console.log(second('cdcdcdcdeeeef'))
console.log(second('aaabbb'))
