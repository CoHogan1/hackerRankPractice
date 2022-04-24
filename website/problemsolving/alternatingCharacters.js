function alternatingC(s){
    let deletions = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]){
            deletions++
        }
    }
    return deletions
}

console.log(alternatingC('AABAAB'))



const second = (s) => {
    let del = 0
    //let temp = s.split('').map((v,i) => v === s[i+1] ? del++ : del)
    s.split('').map((v,i) => v === s[i+1] ? del++ : del)
    return del
}

console.log(second("AABAAB"));

console.log(1.25 * 140
);
