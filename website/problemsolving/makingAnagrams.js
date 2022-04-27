function makingAnagrams(s1, s2){
    let a = s1, b = s2
    a.split('').forEach(n => {
        if (b.includes(n)){
            a = a.replace(n, '')
            b = b.replace(n, '')
        }
    })
    return a.length + b.length
}


console.log(makingAnagrams('cde','abc'))
