var maxSlidingWindow = function(nums, k) {    // 31 out of 50 test casses passed. failed on time.
    if (k === 1) return nums;
    let ans  = []
    for (let i = 0; i <= nums.length -k; i++){
        let window = nums.slice(i, k +i)
        ans.push(Math.max(...window))
    }
    return ans
};
