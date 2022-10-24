var majorityElement = function(nums) {
    nums.sort((a,b) => a - b)
    let i = Math.floor(nums.length /2 )
    return nums[i]
};

// the majority element is always in the middle. 
