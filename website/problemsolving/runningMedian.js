

function runningMedian(a) {
    // median is middle element
    // push a.pop() to a new arr. then return the median for that arr. 

    let sort = a.sort((x,y) =>  x - y)
    let index = sort.length / 2
    let first = sort.slice(0,index)
    let second = sort.slice(index)


    let last = parseInt(first.slice(-1))
    let plus = parseInt(second[0])

    return (last + plus) / 2







}

console.log(runningMedian([7,3,5,2]), 4)
