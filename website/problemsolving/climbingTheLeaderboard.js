
// function climbingLeaderboard(ranked, player) {
//     // join both arrays, and sort them from highest to lowest.
//     let score = [...ranked.concat(...player)].sort((a,b)=> b-a)
//     let memo = [] // each score ranked
//     let place = 1
//     let ranks = []
//     let answer = []
//
//     score.forEach((sc,index)=>{
//         if (sc === score[index + 1]){
//             memo.push(place)
//         }else {
//             memo.push(place)
//             place++
//         }
//     })
//     // get rank for each player in player array.
//     player.sort((a,b)=> b-a).forEach((sc, index)=>{
//         ranks.push(score.indexOf(sc))
//     })
//
//     player.sort((a,b)=> b-a).forEach((item, index)=>{
//         answer.push(memo[ranks[index]])
//     })
//     return answer
// }




function clb(scores, alice) {
    scores = Array.from(new Set(scores)).sort((a,b) => b-a) // [100,90,80]
    const player_ranks = []

    for (const score of alice) {
        // compares                  last elemt of scores
        while (scores && score >= scores[scores.length - 1])
        //     arr       alice[index] >  scores[endIndex]
            scores.pop()
        player_ranks.push(scores.length + 1)
    }
    return player_ranks
}
console.log(clb([100,90,90,80],[70,80,105]), 431)


// const wtf = (scoreBoard, newPlayers) => {
//     let sorted = Array.from(new Set(scoreBoard)).sort((a,b)=> b-a)
//     const ranks = []
//     newPlayers.forEach((score, index)=>{
//         while (sorted && score >= sorted[sorted.length -1]){ // false true true
//             sorted.pop()
//         }
//         ranks.push(sorted.length + 1)
//         // starting from end rank
//     })
//     console.log(ranks)
//     return ranks
// }


//wtf([100,90,90,80],[70,80,105])
