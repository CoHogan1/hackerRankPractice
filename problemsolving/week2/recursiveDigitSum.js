let one = "9875"
let two = 4
// first try
function superDigit(n, k) {
    let total = n.split('').reduce((a,b)=> {return parseInt(a) + parseInt(b)}) // num
    total = total * k // num
    let string = total.toString()
    //console.log(string, " this");

    while (string.length > 1){
        let newTotal = string.split('').reduce((a,b)=>{return parseInt(a) + parseInt(b)})
        let newString = newTotal.toString()
        string = newString
        //console.log(string," this")
    }
    return string
}


superDigit(one, two)
superDigit("148",3)


const fooBarr = (n, k) => {

    if(n.length === 1) {
        return n
    }

    let sum = 0
    for(const i of n) {
        sum += parseInt(i)
    }

    return superDigit((sum * k).toString(), 1)
}
