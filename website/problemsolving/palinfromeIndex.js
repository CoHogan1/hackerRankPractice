function palindromeIndex(s){
    s = s.split('')
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length -i -1]){
            let arr = s.slice(i +1, s.length -i)
            return arr.join('') === arr.reverse().join('') ? i : s.length -i -1
        }
    }
    return -1
}

console.log(palindromeIndex('aaab'))
console.log(palindromeIndex('baa'))
console.log(palindromeIndex('aaa'))
console.log(palindromeIndex('quyjjdcggsvvsggcdjjyq'))
