function CompareLists(llist1, llist2) {
    while(llist1 && llist2){
        if (llist1.data !== llist2.data){ return 0}
        llist1 = llist1.next
        llist2 = llist2.next
    }
    if(llist1 || llist2) { return 0 }
    return 1
}

function CompareLists2(llist1, llist2) {
    if (!llist1 && !llist2) return 1;
    if ( (!llist1 && llist2) || (llist1 && !llist2)
        || (llist1.data != llist2.data)) return 0;

    return CompareLists(llist1.next, llist2.next);
}
