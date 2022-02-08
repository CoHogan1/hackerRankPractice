
let test = ['abc', 'ade', 'efg']
let two  = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
let thr = ['abc','aaa','aaa']

function gridChallange(grid){
    let copy = []
    grid.forEach((item, index, arr)=>{
        copy.push(item.split('').sort().join(''))
    })

    for (let one = 0; one < copy.length - 1; one++) {
        for (let two = 0; two < copy[0].length; two++) {
            if (copy[one][two] > copy[one + 1][two]){
                return "No"
            }
        }
    }
    return "YES"
}

console.log(gridChallange(test));
