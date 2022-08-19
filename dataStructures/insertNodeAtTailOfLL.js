function insertNodeAtTail(head, data) {
    if(!head) return { data };
    for(var n = head; n.next; n = n.next);
    return n.next = { data }, head;
}


let x = 11
let n = 0

for(n; n < x; n += 1000);
//for (initalize; condition; code to run);

//console.log(n);


class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d



const printL = (head) => {
    let curr = head

    while(curr){
        console.log(curr.val);
        curr = curr.next
    }
    return
}

//printL(a)

const recur = (head) => {
    if (head === null) return;
    console.log(head.val);
    recur(head.next)
}

recur(a)
