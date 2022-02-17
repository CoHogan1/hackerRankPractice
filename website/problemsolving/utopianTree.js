

function utopianTree(n) {
    // every even year doubble
    // every odd year  inc by 1
    let height = 1
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0 ){
            height = height * 2
        } else {
            height++
        }
    }
    return height
}



utopianTree(5)
