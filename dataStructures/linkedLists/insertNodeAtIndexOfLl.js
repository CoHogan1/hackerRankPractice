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


// function insertNodeAtPosition(llist, data, position) {
    //     let curr = llist
    //     let ind = -1
    //     while(curr){
        //         ind++
        //         if (ind === position -1){
            //             let oldData = curr.data
            //             let temp = curr.next
            //             let newNode = new SinglyLinkedListNode(data)
            //             curr.next = newNode
            //             newNode.next = temp
            //             break
            //         }
            //         curr = curr.next
            //     }
            //     return llist
            // }
