let one = "9875"
let two = 4


function superDigit(n, k) {
    if (n.length === 1){
        return parseInt(n)
    }
    let total = 0

    n.split('').forEach((item, index)=>{
        total += parseInt(item)
    })

    console.log(total * k)
    return total * k
}


superDigit(one, two)
