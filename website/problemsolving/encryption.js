
function encryption(s){
    let ceil = Math.ceil(Math.sqrt(s.length))
    let temp = s
    let arr = []

    // populate arr with slices of the string.
    while(temp){
        arr = arr.concat(temp.substring(0, ceil))
        temp = temp.substring(ceil)
    }
    let ans = []

    for (let i = 0; i < ceil; i++) {
        ans = ans.concat(arr.reduce((s, e) => {
            // e = element of the array.  arr[i]
            // s = initial value. default to nothing if not defined.
            return s + (e[i] || "")
            // returns initial value + arr[i][i]
        }, ""))
    }

    return ans.join(" ")
}
console.log(encryption('ifmanwasmeanttostayonthefroundgodwouldhavegivenusroots'))




//           8      15         24     31       39         48   53
//  ifmanwas meanttos tayonthe froundgo dwouldha vegivenu sroots
//  0      7          16     23         32       40     47

// returned answer
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau




const newer = (s) => {
    const ceil = Math.ceil(Math.sqrt(s.length))

    let temp = s
    let array = []

    while(temp){
        array = array.concat(temp.substring(0, ceil))
        temp = temp.substring(ceil)
    }
    let result = []

    for (let i = 0; i < ceil; i++) {
        result = result.concat(
            array.reduce((r,v) => {
            return r + (v[i] || "")
            }, "")
        )
    }

    return result.join(' ')
}


// console.log(newer('if man was meant to stay on the ground god would have given us roots'))
//
// console.log(newer('haveaniceday'));
