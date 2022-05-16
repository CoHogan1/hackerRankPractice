function gemstones(arr){
    let memo = {}

    for (let i = 0; i < arr.length; i++) {
        let str = [... new Set(arr[i].split(''))]
        str.map(x => memo[x] ? memo[x]++ : memo[x] = 1)
    }
    let size = Object.values(memo).filter(x => x === arr.length)

    return size.length
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']))
console.log(gemstones(['abc','abc','bc']))


const second = (arr) => {
    let combined = arr.join('')
    let unique = [... new Set(combined)]
    
    let result = unique.filter(ch => arr.every(str => str.includes(ch)))

    return result.length
}

console.log(second(['abcdde', 'baccd', 'eeabg']))
console.log(second(['abc','abc','bc']))
