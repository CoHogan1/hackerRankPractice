function cavity(grid){
    // dont mutate orig data to keep function pure.
    let copy = [...grid]

    for (let a = 1; a < copy.length - 1; a++){
        // split string into an array for looping and vale change.
        let data = copy[a].split('')

        data.map((d,i)=>{
            // these conds check east and west of checked elem
            if (parseInt(data[i]) > parseInt(data[i - 1]) &&
                parseInt(data[i]) > parseInt(data[i + 1]) &&
                // these conds north and south of checked elem.
                parseInt(data[i]) > parseInt(copy[a - 1][i]) &&
                parseInt(data[i]) > parseInt(copy[a + 1][i]) ){
                    data[i] = "x"
                }
        })
        // change copy data to new values
        copy[a] = data.join('')
    }
    // new map.
    return copy
}

console.log(cavity(['989','191','111']))
console.log(cavity(['1112','1912','1892','1234']))
