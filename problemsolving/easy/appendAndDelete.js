// fails on time.....
// s is starting string, t is finished string
// must take k moves
function appendAndDelete(s, t, k) {
    for (var i = 0; i < s.length; i++) {
        if(s[i] != t[i]){
            break
        }
    }
    let delets = s.length - i
    let adds = t.length - i
    let minReq = delets + adds
    let max = s.length + t.length
    console.log(i, delets, adds, minReq, max, " this");
    if (k < minReq || ((k % 2 != minReq % 2) && k < max)){
        return "No"
    } else {
        return "Yes"
    }

}


//console.log(appendAndDelete(['a','b','a'],['a','b','a'], 7))
console.log(appendAndDelete(['h','a','c','k','e','r','h','a','p','p','y'],
['h','a','c','k','e','r','r','a','n','k'], 2))
//console.log(appendAndDelete(['a','a','a','a','a','a','a','a','a','a','a','a','a'],
//['a','a','a','a'], 7))



// aba     aba 7
// ashley, ash 2
// abc   , def 6
