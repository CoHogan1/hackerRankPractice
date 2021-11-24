// the q is an out of ordered Array

let tes = [1,2,3,5,4,6,7,8]
//         0,1,2,3,4,5,6,7

let cho = [4,1,2,3,5,6,7,8]

function minimumBribes(q) {
    let bribes = 0
    q.forEach((item, index)=>{
        if (item - (item + 1) > 2){
            console.log("Too chaotic");
            return "Too chaotic"
        }
    })
    q.forEach((item,index) =>{
        if(q[index] > q[index + 1]){
            console.log(item, q[index], q[index + 1], " comparison")
            bribes++
        }

    })
    console.log(bribes, " here ")
    return bribes
}

// minimumBribes(tes)
// minimumBribes(cho)
//minimumBribes([2,1,5,3,4]) // 3 too chao


function test(arr){
    let copy = [...arr].sort()


    arr.forEach((item, index)=>{
        let comp = arr.sort().indexOf(item)
        console.log(comp);
    })
}

test([2,1,5,3,4])
