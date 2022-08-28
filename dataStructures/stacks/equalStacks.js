let x = [3,2,1,1,1]
let y = [4,3,2]
let z = [1,1,4,1]

function equalStacks(h1, h2, h3) {
    let s1 = h1.reduce((a,b) => a + b);
    let s2 = h2.reduce((a,b) => a + b);
    let s3 = h3.reduce((a,b) => a + b);

    let maxPossibleHeight = Math.min(s1,s2,s3);

    while(true){
       if(s1 === s2 && s2 === s3) break;

       if(s1 !== maxPossibleHeight){
           s1 -= h1.shift();
       }

       if(s2 !== maxPossibleHeight){
           s2 -= h2.shift();
       }

       if(s3 !== maxPossibleHeight){
           s3 -= h3.shift();
       }
       maxPossibleHeight = Math.min(s1,s2,s3);
    }

    return maxPossibleHeight;
}
console.log(equalStacks(x,y,z));



// let a = [1,1,1,1,1]
// let b = [3,2]
// let c = [1,3,1]
//
//
// const sum = (arr) => {
//     if (arr.length === 1 ){ return arr }
//     let ans = []
//     let tot = 0
//     let ind = arr.length -1
//     while(ind > 0){
//         tot+= arr[ind]
//         ans.push(tot)
//         ind--
//     }
//     return ans
// }
//
// function equalStacks(h1, h2, h3) {
//     let val1 = sum(h1)
//     let val2 = sum(h2)
//     let val3 = sum(h3)
//
//     let ind = val3.lengthv -1
//     while(ind > 0){
//         if(val1.includes(val3[ind]) && val2.includes(val3[ind])){
//             return val1[ind]
//         }
//         ind--
//     }
//     return "This shouldnt run...."
// }
//
//
// console.log(equalStacks(x,y,z))
// console.log(equalStacks([1],[1],[1]))
