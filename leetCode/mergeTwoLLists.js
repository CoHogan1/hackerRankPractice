var mergeTwoLists = function(list1, list2) {
    if(!list1 || !list2) return (list1 ? list1: list2);
    let ans = []
    while (list1){
        ans.push(list1.val)
        list1 = list1.next
    }
    while (list2){
        ans.push(list2.val)
        list2 = list2.next
    }

    ans = ans.sort((a,b) => a-b)
    let final = new ListNode()
    let copy = final
    for (let i = 0; i < ans.length; i++){
        final.val = ans[i]
        if (i == ans.length -1){ break }
        final.next = new ListNode()
        final = final.next
    }
    return copy
};
