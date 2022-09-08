// let twoSum = function(nums, target) {
//     let val = 0
//     for(let i = 0; i< nums.length -1; i++){
//         for(let z = 1; z < nums.length; z++){
//             val = i + z
//             if (val === target){ return [i,z]}
//         }
//     }
//     return 0
// };

var twoSum = function(nums, target) {
  var map = new Map();
  // map.set(key, value)
  for(var i = 0; i<nums.length; i++) {
      var num = nums[i];
      if(map.get(num) === undefined) map.set(target-num, i);
      else return [map.get(num), i];
  }
};
//console.log(twoSum([2,7,11,15], 9));

let longestCommonPrefix = function(strs) {
        if(!strs.length) {
            return '';
        }
        for(let i = 0; i < strs[0].length; i++) {
            for(let s of strs) {
                if(s[i] !== strs[0][i]) {
                    return s.slice(0, i);
                }
            }
        }
        return strs[0];
};

//console.log(longestCommonPrefix(["flower","flow","flight"]));
// var isValid = function(s) {
//     while(s.length > 1){
//         let s = s.replace("()", "")
//         let s = s.replace("{}", "")
//         let s = s.replace("[]", "")
//     }
//     if (s.length % 2 === 0) return true;
//     return false;
// };

//console.log(isValid("()"));

// function del(arr, elem){
//     let memo = []
//     arr.map(x =>{
//         if(x != elem){ memo.push(x) }
//     })
//     return memo
// }


// let sq = {0:0,1:1,4:4, 9:9, 16:16, 25:25, 36:36, 49:49, 64:64, 81, 100, 121, 144,
//     169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529,
//     576, 625, 676, 729, 784, 841, 900, 961 }

function preOt(head){
    if (head === null) return;
    preOt(head.left)
    left.push(head.val)
    preOt(head.right)
}

function postO(head){
    if (head === null) return;
    postO(head.left)
    postOt(head.right)
    right.push(head.val)
}
    let left = []
    let right = []

var isSymmetric = function(root) {
    preOt(head)
    postO(head)

    if(right.length != left.length) return false;
    for (let i = 0; i < left.length; i++){
        if (left[i] != right[i]) return false
    }
    return true
};
