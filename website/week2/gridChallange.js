let sam1 = ['abc','ade','efg']
let sam2 = ['acb', 'dfe', 'hig']
let sam3 = ['bdeca', 'jgihf', 'klmno', 'prtqs','uxwvy']
let sam4 = ['abc','lmp','qrt']
let sam5 = ['mpxz','abcd','wlmf']

function gridChallenge(grid) {
    let test = [] // copy of grid
    let answer = []
    let value = "NO"
    // copies the grid in alphabetical order
    grid.forEach((item, index)=>{
        item = item.split('').sort()
        test.push(item)
    })
    console.log(test);
    // converst grids indicies columns, into new 2darr for comparison.
    test.forEach((item, index)=>{
        let row = []
        item.forEach((data, pos)=>{
            row.push(test[pos][index])
        })
        answer.push(row)
    })
    // test if each array is in alphabetical order.
    answer.forEach((item, index)=>{
        if (answer[0] === answer[0].sort()){
            value = "YES"
        }
    })
    console.log(value)
    return value
}
// gridChallange(sam1)
// gridChallenge(sam2)
// gridChallenge(sam3)
// gridChallenge(sam4)
//gridChallenge(sam5)





let test = ['mpxz','abcd','wlmf']

const gC = (arr) => {
    let sorted = []
    // sort each item in the Array
    let len = arr[0].length -1 // len of each item in the arr duh
    arr.forEach((data, index)=>{
        let x = data.split('').sort()//.join('')
        sorted.push(x)
    })
    let cols = []
    for (let i = 0; i < sorted.length; i++) {
        //console.log(sorted[i]);
        for (let j = 0; j < sorted[i].length; j++) {
            console.log(sorted[j][i])

        }
    }
    console.log(cols);


    // see if the first index in the array are all alphabatized as well
    // return true if it is.
}
//gC(test)

// [    0    1    2    3
//   [ 'm', 'p', 'x', 'z' ], 0
//   [ 'a', 'b', 'c', 'd' ], 1
//   [ 'f', 'l', 'm', 'w' ]  2
// ]


// [  i j
//   '00', '01', '02', '03',
//   '10', '11', '12', '13',
//'   20', '21', '22', '23'
// ]



function someone(grid) {
    // Write your code here
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

console.log(someone(test))
console.log(someone(sam1))
console.log(someone(sam2))
console.log(someone(sam3))
console.log(someone(sam4))
