function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let idk = [2,4,3]
// 243
let llone = new ListNode(idk[0], undefined)

let ggg = [5,6,4]
// 564
let lltwo = new ListNode(ggg[0], undefined)


for (let i = 1; i < idk.list; i++){
    llone.next = new ListNode(idk[i], undefined)
    lltwo.next = new ListNode(ggg[i], undefined)
}


var addTwoNumbers = function(l1, l2) {
    let one = ''
    let two = ''
    let curr = l1
    let head = l2

    while(curr.next != undefined){
        one += curr.val.toString()
        two += head.val.toString()
        curr = curr.next
        head = head.next
    }
    const ans = parseInt(one) + parseInt(two)
    const rev = ans.toString().split('').reverse()

    let newll = new ListNode(rev[0], undefined)
    let temp = newll
    for (let i = 1; i < rev.length; i++){
        temp.next = new ListNode(rev[i], undefined)
        temp = temp.next
    }
    return newll

};
