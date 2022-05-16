function funnyString(s){
    let rev = s.split('').reverse('')
    let ans = 'Funny'

    for (let i = 0; i < rev.length - 1; i++) {

        if ( Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0)) !=
            Math.abs(rev[i].charCodeAt(0) - rev[i+1].charCodeAt(0)) ){
            ans = "Not Funny"
            return ans
        }
    }
    return ans
}


console.log(funnyString('lmnop'))
