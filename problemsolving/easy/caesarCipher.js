function caesarCipher(s,k){
    let ans = ''
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // 65 - 90 uppercase
    // 97 - 122  lowercase

    for (let i = 0; i < s.length; i++) {
        let x = s.charCodeAt(i) // number to sort what type of character it is

        let a = String.fromCharCode(x) // character

        let y = alpha.indexOf(a.toLowerCase()) // get index for refrence
        let ind = y + k // adjusted index for new char
        if (ind >= 26){ ind = ind % 26} // return index to 0 if index > 26


        if (x >= 33 && x <= 64 || x >= 91 && x <= 96 || x >= 123){
            // all non alpha chars.
            // add special char to ans
            ans += s[i]
            continue
        }

        if (x >= 65 && x <= 90){
            // uppercase
            ans += alpha[ind].toUpperCase()
            continue

        }
        if (x >= 97 && x <= 122){
            // lowercase
            ans += alpha[ind]
            continue
        }
    }
    return ans
}

console.log(caesarCipher(`There's-a-starman-waiting-in-the-sky`, 3))
console.log(caesarCipher('Hello_World!', 4))
