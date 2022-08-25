
function sortedInsert(llist, data) {
    const newNode = new DoublyLinkedListNode(data);

    if(!llist) return newNode;

    let curNode = llist;

    if(data < curNode.data){
        newNode.next = curNode;
        curNode.prev = newNode;
        newNode.prev = null;
        return newNode;
    }

    while(curNode.next !== null && curNode.data < data){
        curNode = curNode.next;
    }

    if(curNode.data >= data){
        newNode.prev = curNode.prev;
        newNode.next = curNode;
        curNode.prev.next = newNode;
        curNode.prev = newNode;
        return llist;
    }

    curNode.next = newNode;
    newNode.prev = curNode;
    return llist;
}
