function gridChallange(grid){
    let copy = grid.map( x => x.split('').sort().join('') )
    for (let i = 0; i < copy.length -1; i++) {
        for (let z = 1; z < copy[0].length; z++) {
            if (copy[i][z] > copy[i+1][z]){
                return "NO"
            }
        }
    }
    return "YES"
}
console.log(gridChallange(['abc','ade','efg']))

console.log(gridChallange(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))
