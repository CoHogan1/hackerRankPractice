


function angryProfessor(k, a) {
    let count = 0
    a.forEach((stu, index)=>{
        if (stu<= 0){
            count++
        }
    })
    if (count >= k){
        return "NO"
    } else {
        return "YES"
    }
}

console.log(angryProfessor(3,[-2,-1,0,1,2]))
