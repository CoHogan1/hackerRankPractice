function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedList();
    newNode.next = head;
    newNode.data = data;
    return newNode;
}

function insertNodeAtHead(head, data) {
    let newHead = new SinglyLinkedListNode( data );
    newHead.next = head;
    return newHead
}
