var removeElements = function(head, val) {
    let curr = head
    let prev = null
    while (curr){
        if (curr.val === val){
            if(prev){
                prev.next = curr.next
            } else {
                head = curr.next
            }
        } else {
            prev = curr
        }
        curr = curr.next
    }
    return head
};


// let alp = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

let alp = {
  1:'A' ,  2:'B',  3:'C',  4:'D',  5:'E',  6:'F',  7:'G',  8:'H',  9:'I',  10:'J',
  11:'K',  12:'L',  13:'M',  14:'N',  15:'O',  16:'P',  17:'Q',  18:'R',  19:'S',
  20:'T',  21:'U',  22:'V',  23:'W',  24:'X',  25:'Y',  26:'Z'
}

var convertToTitle = function(num){
    if (num < 27) return alp[num];
    let ans = ''
    while (num > 0){
        if (num < 27){
            ans += alp[num]
            return ans
        }
        ans+= alp[1]
        num -= 26
        //console.log(num, " first iter ");

    }
    return ans
};

//console.log(convertToTitle(701));


var convertToTitle = function(n) {
     n = n - 1;
    if(n >= 0 && n < 26){
        return String.fromCharCode(65+n);
    }
    return convertToTitle(parseInt(n/26)) + convertToTitle((n%26)+1);
