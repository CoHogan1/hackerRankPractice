let one = "9875"
let two = 4

// this may be working.
function superDigit(n, k) {
    let num = Math.pow(n,k).toString()
    num.split('').reduce((a,b)=> { return a + b})
    console.log(num, " after reduced");

    // while ( num.length > 1 ) {
    //     num.split('').reduce((a,b)=> { return a + b})
    //     console.log(num)
    //     if( num.length === 1){
    //         return num
    //     }
    // }

    return num



    // if (n.length === 1){
    //     console.log(n);
    //     return parseInt(n)
    // }
    // let total = 0
    // n.split('').forEach((item, index)=>{
    //     total += parseInt(item)
    // })
    // let next = (total * k).toString()
    // superDigit(next, 1)
}


superDigit(one, two)
superDigit("148",3)
