
function isHappy(n){
    let seen = {}
    while (n !== 1 && !seen[n]){
        seen[n] = true
        n = (n).toString().split('').reduce((tot,val) => tot + (val**2), 0);
    }
    return n === 1 ? true : false;
}


console.log(isHappy(19));
