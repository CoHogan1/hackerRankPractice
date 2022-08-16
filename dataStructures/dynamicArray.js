function dynamicArray(n, queries) {
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


console.log(dynamicArray(3, []));
