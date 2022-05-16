// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.


let test = 7
//
let sample = [1,2,1,2,1,3,2]

let idk = 9

let car = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let gg= [4 ,5, 5 ,5, 6, 6, 4, 1, 4, 4, 3, 6, 6 ,3, 6, 1, 4, 5 ,5 ,5]

function sockMerchant(n, ar){
    if(!ar || ar.length !== n){ return 0}

    let pairs = 0
    let memo = {}
    for(let num of ar){
        memo[num] = memo[num] + 1 || 1
    }
    for(let num of ar){
        memo[num] = memo[num] % 2 === 0
        pairs += memo[num]
    }
    return pairs


    // sorted.forEach((item,index)=>{
    //     console.log(sorted, index);
    //     if(sorted[index] === sorted[index +1]){
    //         pairs++
    //         sorted.shift()
    //     } else {
    //         sorted.shift()
    //     }
    // })
    while (sorted.length > 0){
        if(sorted[0] === sorted[1]){
            pairs++
            sorted.shift()
        } else {
            sorted.shift()
        }
        console.log(sorted);
    }

}

sockMerchant(test, gg)
