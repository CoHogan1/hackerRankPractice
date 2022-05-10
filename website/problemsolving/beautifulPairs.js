function beautifulParis(A,B){
    let ans = 0

    for (let i = 0; i < A.length; i++) {
        if(B.includes(A[i])){
            ans++
            let ind = B.indexOf(A[i])
            B.splice(ind, 1)
        }
    }

    if (ans === A.length){
        return ans -1
    } else {
        return ans +1
    }
}

console.log(beautifulParis([1,2,3,4],[1,2,3,3]))
