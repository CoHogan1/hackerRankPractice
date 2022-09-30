let area = [
    [1,0,0],
    [1,0,0],
    [1,9,1]
]

function test(area) {
    if (area[0][0] === 0) return -1;
    let count = 0

    search(0,0)
    return count

    function search(s, e){

        if (area[s][e] === 9) return count;
        if (area[s][e+1] === 1 && area[s+1][e] === 1){
            count++
            return search(s + 1, e);
        }
        if (area[s][e+1] === 1 && area[s+1][e] === 0){
            count++
            return search(s, e + 1);
        }
        return search(s, e+1)
    }
}

console.log(test(area))
