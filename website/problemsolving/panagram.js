// function panagrams(s){
//     return /.*a.*b.*c.*d.*e.*f.*g.*h.*i.*j.*k.*l.*m.*n.*o.*p.*q.*r.*s.*t.*u.*v.*w.*x.*y.*z/.test(s) ? "panagram" : "not panagram"
//
//
//
//
//     return x
// }


//console.log(panagrams("The quick brown fox jumps over the lazy dog"));


const second = (s) => {
    let chSet = new Set()
    s.toLowerCase().split('').map(x =>  x !== " " | chSet.add(x))

    return chSet.size === 26 ? "pangram" : 'not pangram'
}


console.log(second('We promptly judged antique ivory buckles for the next price'));
