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

function deleteNode2(llist, position) {
    if (!llist || llist.next === null) return {}
    if (position < 1) return llist = llist.next;
    let ind = 0
    let curr = llist;
    let prev = null;

    while(ind < position){
        ind++
        prev = curr
        curr = curr.next
    }
    prev.next = curr.next
    return llist
}
// 3rd is the best.
function deleteNode3(llist, position) {
    if (position < 1) return llist = llist.next;
    let curr = llist;
    let prev = null;

    while(position > 0){
        position--
        prev = curr
        curr = curr.next
    }
    prev.next = curr.next
    return llist
}
