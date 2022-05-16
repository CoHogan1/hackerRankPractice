
// s is an array
// d is int
// m is int

function birthday(s, d, m) {
    let count = 0
    s.forEach((piece, index)=>{
        let bar = s.slice(index, m+index)
        if (bar.reduce((a,b) => a+b) === d){
            count++
        }
    })
    return count
}

console.log(birthday([2,2,1,3,2],4,2))
