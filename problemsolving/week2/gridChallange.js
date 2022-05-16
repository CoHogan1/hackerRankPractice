let sam1 = ['abc','ade','efg']
let sam2 = ['acb', 'dfe', 'hig']
let sam3 = ['bdeca', 'jgihf', 'klmno', 'prtqs','uxwvy']
let sam4 = ['abc','lmp','qrt']
let sam5 = ['mpxz','abcd','wlmf']

function gridChallange(grid){
    let sort = grid.map(s => s.split('').sort().join(''))

    let len = sort[0].length

    for (let a = 0; a < sort.length - 1; a++) {
        for (let z = 0; z < len; z++){
            if(sort[a][z] > sort[a+1][z]){
                return 'NO'
            }
        }
    }
    return "YES"
}

console.log(gridChallange(sam1))
console.log(gridChallange(sam2))
console.log(gridChallange(sam3))
console.log(gridChallange(sam4))



function someone(grid) {

    let j = 1, i = 0;
    grid = grid.map((s) => s.split('').sort().join(''))


    while(true) {

        if(j == grid.length) { // idk
            i++;
            j = 1;
        }

        if(i == grid[0].length) return 'YES';

        if(grid[j - 1][i] > grid[j][i]) return 'NO';

        j++;
    }
    return 'YES'
}
// console.log(someone(sam1))
// console.log(someone(sam2))
// console.log(someone(sam3))
// console.log(someone(sam4))
