// my solution.
function repeatingString(s,n) {
    // 'a' is in string.
    if (s.includes('a')){
        if (s.length === 1){ return n }
        // count all 'a' in origional string.
        let aCount = s.split('').filter(letter => letter === "a").length
        if (n % s.length === 0){
            // even divisibles.
            let timesA = n / s.length
            return aCount * timesA
        } else {
            // n !/ by s.length
            let lastLen = Math.ceil(n % s.length)
            let addCount = s.slice(0,lastLen).split('').filter(letter => letter === 'a').length
            let times = Math.floor(n / s.length)
            return (aCount * times) + addCount
        }
    } else {
        // 'a' is not in string.
        return 0
    }
}


// ===> less typing solution  <===
// function repeatingString(s ,n){
//     const numOfRepeats = Math.floor(n / s.length)
//     const remainderString = n % s.length
//     let matches = ( s.match(/a/g) || []).length
//     matches = matches * numOfRepeats
//
//     const remainderMatches = (s.substring(0,remainderString).match(/a/g) || []).length
//     return matches + remainderMatches
// }


console.log(repeatingString('aba',10), 7)
console.log(repeatingString('abcac',10), 4)
console.log(repeatingString('gfcaaaecbg',547602), 164280)
