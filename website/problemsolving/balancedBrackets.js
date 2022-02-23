
function isBalanced(s) {
    let n = -1
    while(s.length != n){
        n = s.length
        s = s.replace('()', '')
        s = s.replace('{}', '')
        s = s.replace('[]', '')
    }
    return s.length == 0 ? "YES" : "NO"
}

console.log(isBalanced('{[()]}'),"yes")
console.log(isBalanced('{[(])} '),'no')
console.log(isBalanced('{{[[(())]]}}'), 'yes')

//
// let sam = '1234554321'
//
// console.log(sam.replaceAll('1', "0"));
