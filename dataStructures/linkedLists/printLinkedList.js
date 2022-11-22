function printLinkedList(head) {
    let curr = head
    while(curr){
        console.log(curr.data)
        curr = curr.next
    }
}

// 2 method
function printLinkedList2(head) {
    if (head === null) return;
    console.log(head.data)
    return printLinkedList(head.next)
}


// just print a linked list data.
