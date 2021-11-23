// the q is an out of ordered Array

let tes = [1,2,3,5,4,6,7,8]
//         0,1,2,3,4,5,6,7

let cho = [4,1,2,3,5,6,7,8]

function minimumBribes(q) {
    let bribes = 0
    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2){
            console.log("Too chaotic")
            return "Too chaotic"
        }
        for (let j = 0; j < i; j++) {
            if (q[j] > q[i]){
                bribes++
            }
        }
    }

    console.log(bribes)
    return bribes
}

minimumBribes(tes)
minimumBribes(cho)
