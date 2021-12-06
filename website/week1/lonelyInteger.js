// Given an array of integers, where all elements but one occur twice,
// find the unique element.
// ex let arr = [1,1,2,2,3,3,4,5,5,6,6,7,7]
// return 4

let arr = [1,2,3,4,3,2,1]
let arr2 = [0,0,1,2,2]

function lonelyInteger(a){
    const memory = {}

    for (const int of a){
        memory[int] = (memory[int] || 0) + 1
    }
    console.log(memory);

    for (const [key, value] of Object.entries(memory)){
        if(value === 1){
            console.log(key)
            return key
        }
    }
}
//lonelyInteger(arr2)
let memo = {}

for (const int of arr){
    memo[int] = (memo[int] || 0) + 1
}
console.log(memo);
