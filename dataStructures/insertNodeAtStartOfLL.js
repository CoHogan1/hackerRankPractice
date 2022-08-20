function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedList();
    newNode.next = head;
    newNode.data = data;
    return newNode;
}
