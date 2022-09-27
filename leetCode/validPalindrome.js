//console.log(str.replace(/[^a-zA-Z ]/g, "")); the space after the "Z"
//                                 ^
// the space would not be removed from the string.

var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let len = str.length -1
    for (let i = 0; i < str.length; i++){
        if (str[i] != str[len - i]) return false
    }
    return true
};
