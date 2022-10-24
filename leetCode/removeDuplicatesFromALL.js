var deleteDuplicates = function(head) {
    let curr = head
    while(curr){
        if(curr.next !== null && curr.val === curr.next.val){
            curr.next = curr.next.next
            continue
        }
        curr= curr.next
    }
    return head
};


// https://www.youtube.com/watch?v=w-OKdSHRlfA
