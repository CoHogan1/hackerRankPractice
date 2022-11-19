var threeSum = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++){
        let sum = 0
        for (let y = 1; y < nums.length -1; y++){
            console.log(i,"-i.", y,'-y', "**");
            if ((nums[i] + nums[y] + nums[y +1]) == 0){ ans.push([nums[i], nums[y], nums[y +1]]) }
        }
    }
    return ans
};
