// this hackerrank question had issues with the orgional params.
// origional prams included only t, cases. Not the width array.
// was this an error? or part of the challange.
function serviceLane(n,t, cases, width){
    let memo = []

    for (let i = 0; i < cases.length; i++) {
        let x = width.slice(cases[i][0], cases[i][1] + 1)
        memo.push(Math.min(...x))
    }
    return memo
}

console.log(serviceLane(8,5, [ [0,3],[4,6],[6,7],[3,5],[0,7] ], [2,3,1,2,3,2,3,3] ),[1,2,3,2,1])
console.log(serviceLane(5,5, [ [2,3],[1,4],[2,4],[2,4],[2,3] ], [1,2,2,2,1]       ),[2,1,1,1,2])
