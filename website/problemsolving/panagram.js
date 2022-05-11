
const second = (s) => {
    let chSet = new Set()
    s.toLowerCase().split('').map(x =>  x !== " " | chSet.add(x))

    return chSet.size === 26 ? "pangram" : 'not pangram'
}


console.log(second('We promptly judged antique ivory buckles for the next price'));
