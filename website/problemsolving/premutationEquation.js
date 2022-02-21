

function premutationEquation(p){
    let memo = []
    p.forEach((num, index)=>{
        let temp = p.indexOf(index + 1) + 1
        let idk = p.indexOf(temp) + 1
        memo.push(idk)
    })
    return memo
}

console.log(premutationEquation([5,2,1,3,4]))
console.log(premutationEquation([4,3,5,1,2]))
