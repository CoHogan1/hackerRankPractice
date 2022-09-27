var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left , right -1)
        }
        left ++;
        right --;
    }
    return true;
};

const isPalindrome = (s, i ,j) => {
    let left = i
    let right = j;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

// let str = 'abcdefg'
// let ind = str.indexOf("e")
// let val = str[ind]
// str = str.replace(val, '')
// console.log(str);
