function staircase(n) {
    let copy = n
    let hash = "#"
    let space = " "
    for (let i = 1; i < n + 2; i++) {
        console.log(space.repeat(copy) + hash.repeat(i))
        copy--
    }
}

staircase(4)
