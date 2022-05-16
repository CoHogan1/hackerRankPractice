// this works.
function dynamicArray(n, queries){
    let data = [] //new Array(n).fill([]) // this creates mirrored arrays... :(
    let lastAnswer = 0
    let ans = []
    for (var i = 0; i < n ; i++) {
        data[i] = []
    }

    queries.forEach((que, ind) => {
        const [sep, x, y] = que
        const idx = (x ^ lastAnswer) % n

        if (sep == 1){
            data[idx].push(y)
            return
        } else {
            const size = data[idx].length
            const index = y % size
            lastAnswer = data[idx][index]
            ans.push(lastAnswer)
        }
    })
    return ans
}
console.log(dynamicArray(2,[[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]]),['ans',7,3])

// this is a duplicate I ran tests on... also functions.
const thisWorks = (n, queries) => {
    const emptySeq = []
    let lastAnswer = 0
    let arr = []
    // populate emptySeq with empty arrays
    for (let i = 0; i < n; i++){
        emptySeq[i] = []
    }
    queries.forEach((el, ind) => {
        const [qe, x, y] = el
        const idx = (x ^ lastAnswer) % n
        switch (qe) {
            case 1:
              emptySeq[idx].push(y)
              break
            case 2:
              const size = emptySeq[idx].length
              const index = y % size
              lastAnswer = emptySeq[idx][index]
              arr.push(lastAnswer)
              break
        }
    })
    return arr
}

console.log(thisWorks(2,[[1,0,5],[1,1,7],[1,0,3],[2,1,0],[2,1,1]]))


let test = new Array(3).fill([])
test[0].push(1)
test[1].push(2)
test[2].push(3)

console.log(test) // why?!?!?!
// [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]
