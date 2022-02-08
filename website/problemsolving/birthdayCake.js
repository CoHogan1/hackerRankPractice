let test = [4,4,2,1]

function birthdayCakeCandles(candles) {
    let x = Math.max(...candles)
    let total = []
    candles.forEach((item) => item === x && total.push(item))
    return total.length
}


birthdayCakeCandles(test)


// for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === x){
//         total++
//     }
// }
