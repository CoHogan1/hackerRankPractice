function marsExplorer(s){
    if (s[0]!= "S" && s[1] != "0" && s[2] != "S"){ return s.length}
    let count = 0
    let len = s.length / 3
    let repeatedStr = s.length / len
    // create a duplicate string of correct signals.
    let comp = s.substring(0, repeatedStr).repeat(len)

    for (let i = 0; i < s.length; i++){
        if (s[i] != comp[i]){
            count++
        }
    }
    return count
}

console.log(marsExplorer("SOSTOT")) // 2
console.log(marsExplorer("QQQ"))    // 3
console.log(marsExplorer("PPPQQQGGGGGGGGGGGGGGGMMMMMMMMMFFFFFFDDDERT"))


const second = (s) => {
    return s.split('').reduce((err, str, ind)=> str !== "SOS"[ind % 3] ? err + 1 : err, 0)
}
console.log(second("SOSTOT"))
