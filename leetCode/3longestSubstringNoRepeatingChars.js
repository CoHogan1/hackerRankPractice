var lengthOfLongestSubstring = function(s) {
    let temp = {}
    let subStrLen = 0
    let lastInd = 0

    for (var i = 0; i < s.length; i++){
        let val = s[i]
        if (temp[val]){
            subStrLen = Math.max(subStrLen, i - lastInd)
            lastInd = Math.max( lastInd,  temp[val])
        }
        // assign the index value to the key value in obj.
        temp[val] = i + 1
    }
    return Math.max(subStrLen, i - lastInd)
};


console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
console.log(lengthOfLongestSubstring('aab'), 2);
console.log(lengthOfLongestSubstring('dvdf'), 3);
