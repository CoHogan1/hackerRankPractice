function deleteNode(llist, position) {
    if (!position){ return llist.next }
    let curr = llist
    let ind = -1
    while(curr){
        ind++
        if(ind === position -1){
            curr.next = curr.next.next
        }
        curr = curr.next
    }
    return llist
}
