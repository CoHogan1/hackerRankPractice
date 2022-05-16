function isValid(s){
    let memo = {}
    s.split('').map(x => memo[x] ? memo[x]++ : memo[x] = 1)

    let arr = Object.values(memo)
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[0]) { count++ }
        if (count > 1){ return "NO"}
    }
    return "YES"
}

console.log(isValid('aabbcd'))
//console.log(isValid('abcdefghhgfedecba'))
