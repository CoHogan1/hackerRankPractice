const second = (s, queries) => {
    const weights = new Set()
    let sum = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i-1] !== s[i]) { sum = 0 }
        sum += s[i].charCodeAt(0) - 97 + 1
        weights.add(sum)
    }
    return queries.map(val => (weights.has(val) ? 'Yes' : 'No'))
}

console.log(second('abbcccdddd',[1,7,5,4,15]))








// lol this code suck dont use it. fails on time.... go figure.
function weightedUniStr(s, queries){
    let copy = s.slice()
    let weight = "#abcdefghijklmnopqrstuvwxyz".split('') // # replaces a + 1
    let ans = []
    let all = []

    while (copy.length > 0){
        let occurance = copy.split('').filter(x => x === copy[0]).length

        for (let i = 1; i <= occurance; i++){
            let lbs = weight.indexOf(copy[0])
            all.push(lbs  * i)
        }
        let regex = /copy[0]/g
        //copy = copy.replaceAll(copy[0], '')
        copy = copy.replace(regex, '')
    }

    queries.forEach((q,i)=>{
        if (all.includes(queries[i])){
            ans.push("Yes")
        } else {
            ans.push("No")
        }
    })

    return ans
}
//console.log(weightedUniStr("abbcccdddd",[1,7,5,4,15]))
