function separateNumbers(s) {
    for (let l = 1; l <= s.length / 2; l++) {
        const n = s.substr(0, l)
        let test = n
        let a = BigInt(n)
        while (test.length <= s.length) {
            test += `${++a}`

            if (test !== s.substr(0, test.length)) {
                break
            }
            if (test === s) {
                console.log(`YES ${n}`)
                return
            }
        }

    }
    console.log("NO")
}

console.log(separateNumbers('99910001001'))
