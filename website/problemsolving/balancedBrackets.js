
function isBalanced(s) {
    let n = -1
    while(s.length != n){
        n = s.length
        s = s.replace('()', '')
        s = s.replace('{}', '')
        s = s.replace('[]', '')
        console.log(s);
    }
    if (s.length === 0){
        return "YES"
    } else {
        return "NO"
    }
}

console.log(isBalanced('{[()]}'))
console.log(isBalanced('{[(])} '))
console.log(isBalanced('{{[[(())]]}} '))

//
// let sam = '1234554321'
//
// console.log(sam.replaceAll('1', "0"));
