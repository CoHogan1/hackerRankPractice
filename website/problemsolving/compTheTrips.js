let a = [1,2,3]
let b = [3,2,1]

// return array [first score, second score]

function comp(c,d){
    let ans = [0,0]

    c.forEach((item, index)=>{
        if (c[index] > d[index]){
            ans[0] += 1
        } else if (c[index] < d[index]){
            ans[1] += 1
        } else {
            console.log("break");
            return // ends one loop
        }
    })
    console.log(ans)
    return ans
}




comp(a,b)
