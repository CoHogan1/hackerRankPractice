function hackerRankInString(s){
    let test = "hackerrank".split('')
    for (let i = 0; i < s.length; i++) {
        if(s[i] === test[0]){
            test.shift()
        }
    }
    return test.length === 0 ? "YES" : "NO"
}


console.log(hackerRankInString("hereiamstackerrank"))


// better solution.

const second = (s) => {
    return /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/.test(s) ? "YES" : "NO"
}

console.log(second("hereiamstackerrank"))
