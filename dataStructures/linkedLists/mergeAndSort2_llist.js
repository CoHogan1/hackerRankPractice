// SinglyLinkedList() is defined in hackerranks script.

function mergeLists(head1, head2) {
    let ans = new SinglyLinkedList()

    while(head1 && head2){
        if (head1.data < head2.data){
            ans.insertNode(head1.data)
            head1 = head1.next
        } else {
            ans.insertNode(head2.data)
            head2 = head2.next
        }
    }

    while(head1){
        ans.insertNode(head1.data)
        head1 = head1.next
    }

    while(head2){
        ans.insertNode(head2.data)
        head2 = head2.next
    }
    return ans.head
}
