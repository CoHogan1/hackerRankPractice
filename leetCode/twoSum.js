
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if(map.get(num) === undefined) map.set(target-num, i);
      else return [map.get(num), i];
  }
};
console.log(twoSum([2,7,11,15], 9));
