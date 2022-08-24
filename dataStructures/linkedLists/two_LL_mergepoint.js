function findMergeNode(headA, headB) {
    let curr = headA
    let targ = headB
    let visited = new Set()
    while(curr){
        visited.add(curr)
        curr = curr.next
    }
    targ = targ.next
    while (targ){
        if (visited.has(targ)){ return targ.data }
        visited.add(targ)
        targ = targ.next
    }
    return " lol wut??? "
}
