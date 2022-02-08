let test = [1,1,0,-1,-1]

const check = (arr) => {
    // 0 pos 1 neg 2 zero
    let ans = [0,0,0]
    let len = arr.length
    arr.forEach((item,index)=>{
        if (item > 0) {
            ans[0] += 1
        } else if (item < 0) {
            ans[2] += 1
        } else {
            ans[1] += 1
        }
    })
    //console.log(`pos=${(ans[0]/ len).toFixed(6)}, neg=${(ans[1]/ len).toFixed(6)}, zero=${(ans[2]/ len).toFixed(6)}`);
    //return `pos=${(ans[0]/ len).toFixed(6)}, neg=${(ans[1]/ len).toFixed(6)}, zero=${(ans[2]/ len).toFixed(6)}`
    ans.forEach((item) => {
        return (item / len).toFixed(6)
    })
}

check(test)
