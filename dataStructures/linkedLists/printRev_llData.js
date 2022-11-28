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

function reversePrint2(llist) {
    if (!llist) return;
    let arr = []
    while (llist){
        arr.unshift(llist.data)
        llist = llist.next
    }
    arr.map(x => console.log(x))
}
