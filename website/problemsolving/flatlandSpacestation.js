//n = number of cities, c is array of ss locations.
function flatlandSpaceStations(n,m,c) {
    if (n === m) { return 0}
    let distances = []

    for (let i = 0; i < c.length; i++) {
        for (let z = 0; z < n; z++){
            let gap = c[i] - z
            let gap2 = c[i+1] - z
            //console.log(gap, c[i], z);
        }
    }
    return "yes"
}
console.log(flatlandSpaceStations(5,2,[0,4]))
