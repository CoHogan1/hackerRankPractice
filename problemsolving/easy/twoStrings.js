function twoStrings(s1, s2){
    let test = new Set(s1)

    for (let i = 0; i < s2.length; i++){
        if (test.has(s2[i])){
            return "Yes"
        }
    }
    return "NO"
}

console.log(twoStrings('and','art'))
