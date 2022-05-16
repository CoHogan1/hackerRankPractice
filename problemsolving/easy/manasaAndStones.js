
function stones(n, a, b){
    let s = new Set()
    for (let i = 0; i < n; i++) {
        let x = (i * a) + (n - 1 - i) * b
        s.add(x)
    }
    return [...s].sort((a,b) => a - b)
}

console.log(stones(3,1,2))
console.log(stones(4,10,100))
