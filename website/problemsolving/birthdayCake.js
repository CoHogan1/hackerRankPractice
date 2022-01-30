let test = [4,4,2,1]

function birthdayCakeCandles(candles) {
    let x = Math.max(...candles)
    let total = 0

    candles.reduce((a,b) => a === b && total++)
    //console.log(x, total, "here");
    return `${x} num of candles ${total}`
}


birthdayCakeCandles(test)


// for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === x){
//         total++
//     }
// }
