// Watson gives Sherlock an array of integers. His challenge is to find an
// element of the array such that the sum of all elements to the left is equal
// to the sum of all elements to the right.

let test  = [5,6,8,11]
let test2 = [1,2,3,3]
let idk =  [1,2,3]
let idk2 = [1,2,3,3]
function balancedSums(arr){
    if (arr.length === 0){return arr[0]}
    let ans = false
    arr.forEach((item, index)=>{
        let left  = arr.slice(0, index).reduce((a, b) => { return a + b}, 0)
        // right side of the array will be biger for first half.
        let right = arr.slice(index + 1).reduce((a,b) => { return a + b}, 0)
        if (left === right){
            ans = true
        }
        if (ans) {return }
    })
    if (ans){
        return "YES"
    } else {
        return "NO"
    }
}
// console.log(balancedSums(test))
// console.log(balancedSums(test2))
// console.log(balancedSums(idk))
// console.log(balancedSums(idk2))

// other solution
const arr = [1, 2, 3, 4, 5, 7, 3];
const arr2 = [4, 6, 3, 4, 5, 2, 1];

const isSherlockArray = arr => {
   let sum = arr.reduce((acc, val) => acc+val);
   let leftSum = 0;
   for(let i = 0; i < arr.length; i++){
      sum -= arr[i];
      if(sum === leftSum){
         return "YES";
      };
      leftSum += arr[i];
   };
   return "NO";
};
// console.log(isSherlockArray(arr));
// console.log(isSherlockArray(arr2));

// this one works within the time limie.
function newAndImp(arr){
    let sum = arr.reduce((acc, value)=> { return acc + value})
    let leftSum = 0
    let ans = false
    arr.forEach((item, index)=>{
        sum -= arr[index]
        if (sum === leftSum){
            ans = true
            return
        }
        leftSum += arr[index]
    })
    return ( ans ? "YES" : "NO")
}

console.log(newAndImp(idk) , " here");
console.log(newAndImp(idk2), " yes");
