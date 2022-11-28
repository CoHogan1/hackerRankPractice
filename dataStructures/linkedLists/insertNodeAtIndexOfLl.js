// passes all test cases.
function insertNodeAtPosition(llist, data, position) {
    let newNode = new SinglyLinkedListNode(data)
    let curr = llist
    let ind = -1

    while(curr){
        ind++
        if (ind === position -1){
            newNode.next = curr.next
            curr.next = newNode
            break
        }
        curr = curr.next
    }
    return llist
}

function insertNodeAtPosition2(llist, data, position) {
    if (!llist) return { data };
    let ind = 0
    let curr = llist

    while(ind < position -1){
        ind++
        curr = curr.next
    }

    let temp = curr.next
    curr.next = { data }
    curr.next.next = temp

    return llist
}


function insertNodeAtPosition3(llist, data, position) {
    const node = new SinglyLinkedListNode(data)
    let current = llist

    for (let i = 0; i < position - 1; i++) {
        if (current.next) {
            current = current.next
        }
    }
    
    node.next = current.next
    current.next = node

    return llist
}
