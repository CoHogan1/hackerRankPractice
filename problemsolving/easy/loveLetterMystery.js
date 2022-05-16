// can only reduce letter by one.   a => b
// cannot increase letter value.... b => a
// cannot change a.
// a == 97 char code



function theLoveLetterMystery(s){
    let rev = s.split('').reverse().join('') // good
    if (rev === s){ return 0}
    // not a plaindrome already.

    let count = 0
    for (let i = 0; i < s.length / 2; i ++){
        if (s[i] != rev[i]){
            let x = Math.abs(rev.charCodeAt(i) - s.charCodeAt(i))
            count += x
        }
    }
    return count
}

console.log(theLoveLetterMystery('abc'))
console.log(theLoveLetterMystery('abcba'))
console.log(theLoveLetterMystery('abcd'))
console.log(theLoveLetterMystery('cba'));


const second = (s) => {
    let count = 0
    for (let i = 0; i < s.length / 2; i++) {
        count += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - i - 1))
    }
    return count
}

console.log(second('abc'))
console.log(second('abcba'))
console.log(second('abcd'))
console.log(second('cba'))
