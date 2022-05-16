// check if only unique characters in a string....
function isIsogram(s){
    return !/(.).*\1/.test(s)
}
//console.log(isIsogram('abc'))   // true
//console.log(isIsogram('abcdd')) // false

function superReducedString(s){
    let remove = /aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/g
    let x = s.replace(remove, '')
    let count = 0

    while (count < 2000) {
        x = x.replace(remove, '')
        count++
        if (x == ''){ return "Empty String" }
    }
    if (x == ''){ return "Empty String" }
    return x
}

console.log(superReducedString('baab'))
console.log(superReducedString('abba'))
console.log(superReducedString('aaabccddd'))
console.log(superReducedString('aa'))



const actual = (s) => {
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i,2)
            i = -1
        }
    }

    if (arr.length === 0){ return "Empty String" }
    return arr.join('')
}


console.log(actual('baab'))
console.log(actual('abba'))
console.log(actual('aaabccddd'))
console.log(actual('aa'))
