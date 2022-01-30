let arr = [1,3,5,7,9]

function minMax(list){
    let copy = list.slice(0)
    copy.sort((a,b) => a - b)
    let sum = copy.reduce((a,b) => a + b)

    console.log((sum - copy[copy.length -1]), (sum - copy[0]))
    return (sum - copy[copy.length -1]) , (sum - copy[0])
}
minMax(arr)
