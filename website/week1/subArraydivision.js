// s = arrays  numbers on each square

// m = length  or the month

// d = the sum or the birthday





function birthday(s, d, m){
    let count = 0
    let sum = 0

    s.forEach((item, index)=>{
        for (let i = 0; i < m ; i++) {
            sum = sum + s[i]
        }
        if (sum == d){
            count++
        }
    })
    count<<count
    console.log(count)
    return count
}

birthday([2,2,1,3,2], 4, 2 )





function bday(s, d, m){
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let  arr = s.slice(0 + i, m + i)
        if (arr.reduce((a,b)=> a + b) === d){
            count++
        }
    }
    console.log(count)
    return count
}

bday([2,2,1,3,2], 4, 2 )
