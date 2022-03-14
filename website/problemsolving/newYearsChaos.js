function minimumBribes(q){
    let num = 0
    let cho = false

    for (let i = 0; i < q.length; i++) {
        if (q[i] - i > 3){
            console.log('Too chaotic')
            return 'Too chaotic'
        }
        for (let z = q[i] - 2; z < i; z++){
            if(q[z] > q[i]){
                num++
            }
        }
    }
    console.log(num)
    return num
}

console.log(minimumBribes([1,2,5,7,8,6,4]))
console.log(minimumBribes([2,1,5,3,4]))
