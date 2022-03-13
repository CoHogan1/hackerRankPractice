function migratoryBirds(arr) {
    let memo = {}

    arr.sort().forEach((bird, index)=>{
        memo[bird] ? memo[bird]++ : memo[bird] = 1
    })

    let vals = Object.values(memo)
    let max = Math.max(...vals)

    //let test = Math.max(...Object.values(memo))
    for (const data in memo){
        if (memo[data] === max){
            console.log(data)
            return data
        }
    }

}
//migratoryBirds([1,1,2,2,3])
migratoryBirds([1,4,4,4,5,3,2,2,2])
