
function strangeCounter(t){
    let n = 2
    while (3 * (n-1) < t){
        n *= 2
    }
    return 3 * (n-1) - t + 1
}

console.log(strangeCounter(14))
