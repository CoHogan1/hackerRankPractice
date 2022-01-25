let matrx = [[1,2,3],
             [4,5,6],
             [9,8,9]]

let quad = [[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7]]

function bob(mtx){
    // return sum of the diagonal values.
    let len = mtx[0].length - 1
    let sum1 = 0
    let sum2 = 0
    mtx.forEach((item, index) => {
        sum1 += mtx[index][index]
        sum2 += mtx[index][len - index]
    })
    console.log(sum1, sum2);

    console.log(Math.abs(sum1-sum2));
    return Math.abs(sum1 - sum2)
}


bob(matrx)
bob(quad)
