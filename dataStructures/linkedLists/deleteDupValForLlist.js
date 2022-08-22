function removeDuplicates(llist) {
    let ans = new SinglyLinkedList()
    let prev = null

    let curr = llist
    while(curr){
        if(prev !== curr.data){
            ans.insertNode(curr.data)
        }
        prev = curr.data
        curr = curr.next
    }
    return ans.head
}
