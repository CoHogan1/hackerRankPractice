var maxArea = function(height) {
    let maxArea = -1;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxArea = Math.max((h * w), maxArea);

        if (height[left] > height[right]) right--;
        else left++;
    }

    return maxArea
};
