
function happyLadyBugs(b){
    // this is my solution. passes all test cases....

    let copy = b.split('').filter(x => x != "_").sort()

    // if a single bug found return no
    for (let i = 0; i < copy.length; i++){
        if (copy.indexOf(copy[i]) === copy.lastIndexOf(copy[i])){
            return "NO"
        }
    }
    // no single bugs found continue with checks
    if (b.includes("_")) {
        return "YES"

    } else { // no "_" found.
        // no moves available, bugs have to have a companion
        let x = "NO"
        for (let i = 0; i < b.length; i++){
            if (b[i] === b[i +1] || b[i] === b[i - 1]){
                x = "YES"
            } else {
                 return "NO"
            }
        }
        return x
    }
}
// console.log(happyLadyBugs('G'),'no')
// console.log(happyLadyBugs('GR'),'no')
// console.log(happyLadyBugs('_GR_'),'no')
// console.log(happyLadyBugs('_R_G_'),'no')
// console.log(happyLadyBugs('R_R_R'),'yes')
// console.log(happyLadyBugs('RRGGBBXX'),'yes')
// console.log(happyLadyBugs('RRGGBBXY'),'no')
//
// console.log(happyLadyBugs("RBY_YBR"), "yes")
// console.log(happyLadyBugs("X_Y__X"),   "no")
// console.log(happyLadyBugs("__"),      "yes")
// console.log(happyLadyBugs("B_RRBR"),        "yes")
//
// console.log(happyLadyBugs("AABBC"),"no")
// console.log(happyLadyBugs("AABBC_C"),"yes")
// console.log(happyLadyBugs("_"),"yes")
// console.log(happyLadyBugs("DD__FQ_QQQF"),"yes")
// console.log(happyLadyBugs("AABCBC"),"no")



// this is a one liner code i found... it works the same. lol

const faster = (b) => {
    return (b.includes('_') ? b.split('').sort() : b.split(''))
    .filter(c => c != "_").every((b, i, a) => b == a[i + 1] || b == a[i -1]) ? "YES" : "NO"
}


console.log(faster('G'),           'no')
console.log(faster('GR'),          'no')
console.log(faster('_GR_'),        'no')
console.log(faster('_R_G_'),       'no')
console.log(faster('R_R_R'),      'yes')
console.log(faster('RRGGBBXX'),   'yes')
console.log(faster('RRGGBBXY'),    'no')

console.log(faster("RBY_YBR"),    "yes")
console.log(faster("X_Y__X"),      "no")
console.log(faster("__"),         "yes")
console.log(faster("B_RRBR"),     "yes")

console.log(faster("AABBC"),       "no")
console.log(faster("AABBC_C"),    "yes")
console.log(faster("_"),          "yes")
console.log(faster("DD__FQ_QQQF"),"yes")
console.log(faster("AABCBC"),      "no")
