var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){
        // get l1 val, and add its value.
        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        // get l2 val and add it to its val.
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }
        // add a node with sums current value.
        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    return List.next;
};
