var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    var curA = headA;
    var curB = headB;
    while (curA != curB) {
        curA = curA == null ? headB : curA.next;
        curB = curB == null ? headA : curB.next;
    }
    return curA;
};



var convertToTitle = function(n) {
    if( n <= 0) return "";
    var character_offset = 64;
    var columnTitle = "";
    while(n > 0) {
        var remainder = n % 26 == 0 ? 26 : n % 26;
        n = (n-remainder) / 26;
        columnTitle = String.fromCharCode(character_offset+remainder) + columnTitle;
    }
    return columnTitle;
};


let val = String.fromCharCode(65)


let x = [ 'a','b','c',['d',['e',['f']]] ]
console.log(x.flat(Infinity).join(''));
