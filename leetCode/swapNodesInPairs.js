var swapPairs = function(head) {
    if (!head) return head;
    let ans = head;
    let cnt = 0;
    while (head && head.next){
        if (cnt % 2 === 0){
            [head.val, head.next.val] = [head.next.val, head.val];
        }
        cnt++
        head = head.next
    }
    return ans
};
