function getNode(llist, positionFromTail) {
    let curr = llist
    let data = []
    while(curr){
        data.push(curr.data)
        curr = curr.next
    }
    return data[data.length - positionFromTail -1]
}
