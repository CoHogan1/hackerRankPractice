function twoStacks(maxSum, a, b) {
    // all a choices
    let aChoices = []
    // total value, needs to be less than maxSum
    let total = 0
    // get all stack-a plays
    for (let val of a){
        if(total + val > maxSum){ break }
        total += val
        aChoices.push(val)
    }

    let max = aChoices.length
    let plays = 0

    for (let val of b){
        total += val
        plays++

        if(total > maxSum){
            if(!aChoices.length){ break }
            total -= aChoices.pop()
        } else {
            max = Math.max(plays + aChoices.length, max)
        }
    }
    return max

}
console.log(twoStacks(10, [4,2,4,6,1],[2,1,8,5]));
