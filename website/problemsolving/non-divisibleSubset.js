function nonD(k,s){
    var factorArray = Array(k).fill(0);
    for (let i = 0; i < s.length; i += 1) {
        factorArray[s[i] % k] += 1;
    }

    let size = 0

    for (let i = 0; i < Math.floor(k/2)+1; i += 1) {
        if (i == 0 || k == i * 2) {
            size += (factorArray[i] != 0) ? 1 : 0;
        } else {
            size += Math.max(factorArray[i], factorArray[k - i]);
        }
    }
    return size   
}

console.log(nonD(4,[19,10,12,10,24,25,22]))
console.log(nonD(3,[1,7,4,2]))
