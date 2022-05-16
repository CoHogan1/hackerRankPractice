
function countingValleys(steps, path){
    let memo = 0
    let val = 0
    let ext = false

    path.forEach((data, index)=>{
        (data === "D" ? memo-- : memo++)
        if (!ext  && memo < 0){
            ext = true
            val++
        }
        if (ext && memo >= 0){
            ext = false
        }

    })
    // console.log(val)
    return val

}
countingValleys(8, ['U','D','D','D','U','D','U','U']) // 1
countingValleys(10,['U','D','U','D','U','D','U','D','U','D',]) // 0


// let memo = 0
// let vals = 0
// let valleyStart = false
// path.forEach((data, index)=>{
//     ( data === "D" ? memo-- : memo++ )
//
//     if (memo === -1 && valleyStart === false){
//         vals++
//         valleyStart = true
//     }
//
// })
// console.log("   ")
// console.log(vals)
