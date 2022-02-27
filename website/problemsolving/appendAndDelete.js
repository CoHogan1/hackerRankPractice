// fails on time.....
// s is starting string, t is finished string
// must take k moves
function appendAndDelete(s, t, k) {
    // let count = 0
    // for (let i = 0; i < k; i++) {
    //     if (t[i] != s[i]){
    //         count++
    //     }
    // }
    // if ((s.length - t.length) + count <= k){
    //     return "Yes"
    // }else {
    //     return "No"
    // }

    // a s h l e y
    // a s h

    let diff = 0
    for (let i = 0; i < k; i++) {
        if (t[i] != s[i]){
            diff++
        }
    }
    console.log(diff);
}



console.log(appendAndDelete(['a','b','c'],['d','e','f'], 6))
console.log(appendAndDelete(['a','s','h','l','e','y'],['a','s','h'], 2))
