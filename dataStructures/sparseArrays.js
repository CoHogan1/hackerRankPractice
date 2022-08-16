function matchingStrings(strings, queries) {
    let ansArray = []

    for (let i = 0; i < queries.length; i++){
        ansArray.push(0)
        for (let z = 0; z < strings.length; z++){
            if (queries[i] === strings[z]){
                ansArray[i]++
            }
        }
    }
    return ansArray
}


console.log(matchingStrings(['ab','ab','abc'],['ab','abc','bc']), [2,1,0]);
