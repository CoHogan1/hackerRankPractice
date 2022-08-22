function reversePrint(llist) {
    let stack = []
    let curr = llist
    while(curr){
        stack.push(curr.data)
        curr = curr.next
    }
    while(stack.length > 0){
        console.log(stack.pop())
    }
}
