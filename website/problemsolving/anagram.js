function anagram(s){
    if (s.length % 2 != 0) { return -1 }
    let count = 0
    let fir = s.substring(0,s.length / 2).split('').sort().join('')
    let end = s.substring( s.length / 2 ).split('').sort().join('')

    for (let i = 0; i < s.length / 2; i++) {

        if (fir.includes(end[i])) {
            fir = fir.replace(end[i], "")
        } else {
            count++
        }
    }

    return count
}

console.log(anagram('aabb'))
