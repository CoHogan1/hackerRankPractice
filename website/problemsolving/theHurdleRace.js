




function hurdleRace(k, height) {
    let max = height.sort((a,b)=> b - a)[0]
    if (max < k) return 0
    return max - k
}


console.log(hurdleRace(1,[1,2,3,3,2]))
console.log(hurdleRace(4,[1,6,3,5,2]))
