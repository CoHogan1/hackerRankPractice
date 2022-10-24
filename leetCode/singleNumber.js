var test = function(nums) {
    let memo = {}
    for (let i = 0; i < nums.length; i++){
        memo[nums[i]] ? memo[nums[i]]++ : memo[nums[i]] = 1;
        // if(memo[nums[i]]){
        //     memo[nums[i]]++
        // } else {
        //     memo[nums[i]] = 1
        // }
    }
    for (const [key, val] of Object.entries(memo)){
        if(val === 1) return key
    }
};


console.log(test([4,1,2,1,2]));


var singleNumber = function(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        console.log(result, "before");
        result = result^nums[i];
    }
    return result;
};

console.log(singleNumber([4,1,2,1,2]));
