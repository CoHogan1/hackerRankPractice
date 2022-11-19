var reverse = function(x) {
    x = x.toString()
    let ans = ''
    for(let i = x.length -1; i >= 0; i--){
        ans += x[i]
    }
    if (Math.abs(parseInt(ans)) > Math.pow(2, 31) -1) {
        return 0;
    }
    if (x < 0){
        ans = ans.slice(0, -1)
        return -ans
    }
    if (ans[0] == 0){
        ans = ans.slice(1)
    }
    return ans
};


//console.log(reverse(-321));

console.log(parseInt(0.000005));
console.log(parseInt(0.0000005));

// -321
// 123-
