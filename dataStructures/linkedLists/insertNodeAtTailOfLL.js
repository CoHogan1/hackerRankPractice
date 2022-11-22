function insertNodeAtTail(head, data) {
    if(!head) return { data };
    for(var n = head; n.next; n = n.next);
    return n.next = { data }, head;
}

function insertNodeAtTail2(head, data) {
    // note, the return value is an object....
    if(!head) return { data };
    let curr = head
    while(curr.next){
        curr = curr.next
    }
    // assing the data value to n.next, also needs to be an object....
    // not a new SinglyLinkedListNode()....
    curr.next = { data }
    return head;
}
