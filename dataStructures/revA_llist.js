function reverse(llist) {
    let prev = null
    while(llist){
        let temp = llist.next
        llist.next = prev
        prev = llist
        llist = temp
    }
    return prev
}
