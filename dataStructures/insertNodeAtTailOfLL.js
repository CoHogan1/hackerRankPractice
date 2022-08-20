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
// ll one
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

// ll 2
// const a = new Node(2)
// const b = new Node(8)
// const c = new Node(3)
// const d = new Node(7)


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
//recur(a)


const returnVal = (head) => {
    let values = []
    let curr = head
    while(curr){
        values.push(curr.val)
        curr = curr.next
    }
    return values
}

//console.log(returnVal(a));
const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val)
    fillValues(head.next, values)
}

const recRetVal = (head) => {
    let values = []
    fillValues(head, values)
    return values

}
//console.log(recRetVal(a))


const addVals = (head) => {
    let total = 0
    let curr = head
    while(curr){
        total+= curr.val
        curr= curr.next
    }
    return total
}
//console.log(addVals(a));

let formula = []
let count = 0

function addValRec(head){
    // this runs 31 times....?
    count++
    if(head === null) return 0;
    formula.push(head.val + addValRec(head.next))
    return head.val + addValRec(head.next)
}

//addValRec(a)

//console.log(formula, count);


const findVal = (head, val) => {
    if (head === null) return false
    if (head.val === val) return true
    return findVal(head.next, val)
}

console.log(findVal(a, d));

// SinglyLinkedListNode {
//   data: 16,
//   next: SinglyLinkedListNode {
//     data: 13,
//     next: SinglyLinkedListNode { data: 7, next: null }
//   }
// }
