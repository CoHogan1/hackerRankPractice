
var twoSum = function(nums, target) {
  let map = new Map();
  // map.set(key, value)
  for(let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if(map.get(num) === undefined) map.set(target-num, i);
      else return [map.get(num), i];
  }
};


console.log(twoSum([2,7,11,15], 9));

// let longestCommonPrefix = function(strs) {
//         if(!strs.length) {
//             return '';
//         }
//         for(let i = 0; i < strs[0].length; i++) {
//             for(let s of strs) {
//                 if(s[i] !== strs[0][i]) {
//                     return s.slice(0, i);
//                 }
//             }
//         }
//         return strs[0];
// };
//
//
//
// let root = [3,9,20,null,null,15,7]
//
// let nodes = []
//
// var maxDepth = function(root) {
//     if (!root){ return }
//     nodes.push(root.val)
//
//     if(root.right){
//         maxDepth(root.right)
//
//     }
//     if (root.left){
//         maxDepth(root.left)
//
//     }
//
//
//
//     return nodes
// };
//
//
// console.log(maxDepth(root));


// if (!root) return null;
// let max = Math.max(maxDepth(root.left), maxDepth(root.right))
// console.log(maxDepth(root.left), " this");
// return max + 1
