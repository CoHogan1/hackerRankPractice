function flippingBits(n){
    let x = n.toString(2)

    console.log(x)

    let y = ''

    for (let i = 0; i < x.length; i++) {
        x[i] === '0' ?  y += "1" : y += "0"
    }

    return parseInt(y)
}
console.log(flippingBits(2147483647))
