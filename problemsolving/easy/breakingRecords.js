

// score = [game1, game2 game3, game4]
// recordLow   recordHigh


function breakingRecords(scores) {
    let low  = scores[0]
    let high = scores[0]
    let rBreak = [0,0] // low , high
    scores.forEach((sco, index)=>{
        if (sco > high){
            high = sco
            rBreak[0]++
            return
        } else if (sco < low){
            low = sco
            rBreak[1]++
            return
        }
    })
    // console.log(rBreak);
    return rBreak[0], rBreak[1]
}



console.log(breakingRecords([12,24,10,24]))


// function breakingRecords(scores) {
//     let best = 0;
//     let worst = 0;
//     let bestScore = scores[0];
//     let worstScore = scores[0];
//     const lengthOfData = scores.length;
//     for(let i = 1; i < scores.length; i++) {
//         if (scores[i] > bestScore) {
//             bestScore = scores[i];
//             best++;
//             continue;
//         }
//         if (scores[i] < worstScore) {
//             worstScore = scores[i]
//             worst++;
//             continue;
//         }
//     }
//     return [best, worst];
// }
