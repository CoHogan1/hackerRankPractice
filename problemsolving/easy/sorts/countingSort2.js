function countingSort2(arr){
    //let size = arr.length < 101 ? arr.length : 100
    let ans = new Array(100).fill(0)
    arr.map(x => ans[x]++ )

    let ordered = []
    for (let i = 0; i < ans.length; i++) {
        //if (ans[i] === 0){ continue }
        while(ans[i] > 0 && ans[i] != 0){
            ordered.push(i)
            ans[i]--
        }
    }
    return ordered
}

console.log(countingSort2([1,1,3,2,1]))
console.log(countingSort2([19,10,12,10,24,25,22]))
