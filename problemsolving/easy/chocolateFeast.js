// n = budget
// c = cost per bar
// m = how many wrappers to get a new bar

function chocolateFeast(n,c,m){
    let wrappers = Math.floor(n / c) // 5 w
    let bars = Math.floor(n / c)
    while (wrappers > 0){
        bars++
        wrappers++
        wrappers -= m
    }
    return bars - 1 // lol
}

console.log(chocolateFeast(15,3,2), 9)
console.log(chocolateFeast(10,2,5), 6)
console.log(chocolateFeast(12,4,4), 3)
console.log(chocolateFeast(6, 2,2), 5)
