
function squares(a,b){
    let data = [1,0]

    while (data[0] * data[0] <= b){
        let sq = data[0] * data[0]
        if (sq >= a && sq <= b) { data[1]++}
        data[0]++
    }
    return data[1]
}



console.log(squares(24,49), 3)
