
// first game cost p, every other game cotst x = p - d, keeps going down untill
// cost is less than or = to m. then all games cost m.
function howManyGames(p,d,m,s){
    let test = []
    let i = 0

    while (s > 0) {
        let cost = p - (d * i)
        if (cost <= m) { cost = m }
        s = s - cost
        if (s < 0){ break }
        test.push(s)
        i++
    }
    //console.log(test)
    return test.length
}

//console.log(howManyGames(20,3,6,80)," ans = 6")
console.log(howManyGames(6,2,1,9981), 9917)
console.log(howManyGames(1,100,1,9777));



// let test = []
//
// for (let i = 0; i < s; i++) {
//     let cost = p - (d * i)
//     if (cost <= m) { cost = m}
//     s = s - cost
//     test.push(s)
//     if (s <= 0){
//         break
//     }
// }
//
//
// return test.length
