let sample = ['abc','ade','efg']
let sam2 = ['acb', 'dfe', 'hig']
let sam3 = ['bdeca', 'jgihf', 'klmno', 'prtqs','uxwvy']

function gridChallenge(grid) {
    let test = [] // copy of grid
    let answer = []
    let value = "NO"
    // copies the grid in alphabetical order
    grid.forEach((item, index)=>{
        item = item.split('').sort()
        test.push(item)
    })
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
gridChallenge(sam2)
gridChallenge(sam3)
