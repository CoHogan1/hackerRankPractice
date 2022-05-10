function decentNumber(n){
    let ans = -1
    let i = n

    while (i >= 0){
        if (i % 3 === 0){
            ans = "5".repeat(i) + "3".repeat(n -i)
            break
        }
        i -=5
    }

    //console.log(ans) // hackerrank wants a logged ans.
    return ans

}

console.log(decentNumber(1))
console.log(decentNumber(3))
console.log(decentNumber(5))
console.log(decentNumber(11))

console.log(decentNumber(13))
console.log(decentNumber(15))
