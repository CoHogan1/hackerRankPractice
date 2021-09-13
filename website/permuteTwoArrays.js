
let three = [2,1,3] // k = 5
let four =  [7,8,9]

let five = [1,2,2,1] // k = 10
let six =  [3,3,3,4]


function twoArrays(k, A, B){
    const sortedA = A.sort( (a,b)=> a-b )
    const sortedB = B.sort( (a,b)=> a-b )
    const len = A.length
    A.forEach((item, index)=>{
        if(sortedA[index] + sortedB[len - 1 - index] < k){
            console.log('no');
            return 'no'
        }

    })
    console.log('yes');
    return 'yes'
}


twoArrays(10, three, four)
twoArrays(5, five, six)


// const sumA = A.reduce((a,v) => a += (v > k) ? k : v, 0)
// const sumB = B.reduce((a,v) => a += (v > k) ? k : v, 0)
// return (A.length && sumA + sumB >= k + A.length) ? "yes" : 'no'
