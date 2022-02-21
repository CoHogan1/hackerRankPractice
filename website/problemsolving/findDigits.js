

function findDigits(n){
    let divisiors = 0
    let x = n.toString().split('')
    x.forEach((num, index)=>{
        if (n % parseInt(num) === 0){ divisiors ++ }
    })
    return divisiors
}


// console.log(findDigits(124))
// console.log(findDigits(111))
// console.log(findDigits(10))
// console.log(findDigits(12))
// console.log(findDigits(2))
console.log(findDigits(123456789))
console.log(findDigits(1012))
