let a = [1,2,3]
let b = [3,2,1]

// return array [first score, second score]

function comp(a,b){
    let ans = [0,0]

    a.forEach((item, index)=>{
        if (a[index] > b[index]){
            ans[0] += 1
        } else if (a[index] < b[index]){
            ans[1] += 1
        } else { // both are equal do nothing.
            console.log("break");
            return
        }
    })
    console.log(ans)
    return ans
}




comp(a,b)
