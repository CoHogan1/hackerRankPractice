let cho  = [2,1,5,3,4] // 3
let cho2 = [2,5,1,3,4] // too chaotic

let cra = [1,2,5,3,7,8,6,4]

function minimumBribes(q){
    let brib = 0
    let copy = q.slice()
    copy.forEach((item, index)=>{
        if (copy[index] - index > 3){
            console.log("Too Chaotic")
            return "Too Chaotic"
        }
        if (copy[index] > copy[index + 1]){
            [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]]
            brib++
        }
    })
    console.log(brib)
    return brib

}
minimumBribes(cho)
minimumBribes(cho2)
minimumBribes(cra)
