// linked lists.
// let arr = ["node", "node", "node"]

const node = { data: 100 }
const node2 = { data: 200 }
node.next = node2

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}
class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    // insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
        //                   head, next
        this.size++
    }
    // insert last node
    insertLast(data){
        let node = new Node(data)
        let current
        // if empty, make it head.
        if(!this.head){
            this.head = node
        } else {
            current = this.head
            while (current.next){
                // loop thru list, and node as next to last node.
                current = current.next
            }
            current.next = node
        }
        this.size ++
    }
    // insert at index
    insertAt(data, index){
        // out of rande index
        if (index > 0 && index > this.size){ return }
        // if first index
        if (index === 0) {
            // insertFirst(data)
            this.head = new Node(data, this.head)
            return
        }
        const node = new Node(data)
        let current, previous
        // set current to first
        current = this.head
        let count = 0
        while(count < index){
            previous = current // node before index insert
            count++
            current = current.next // node after index
        }
        node.next = current

        previous.next = node // insertion.
        this.size++
    }
    // get at index
    getAt(index){
        let current = this.head
        let count = 0
        while(current){
            if (count == index){
                console.log(current.data, " the index")
            }
            count++
            current = current.next
        }
        return
    }
    // remove at index
    removeAt(index){
        if(index > 0 && index > this.size){return}
        let current = this.head
        let previous
        let count = 0
        if(index === 0){
            this.head = current.next
        } else {
            while(count < index) {
                count ++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }
    // clear list
    clearList(){
        this.head = null
        this.size = 0
    }

    // print list
    printListData(){
        let current = this.head
        while (current){
            console.log(current.data)
            current = current.next
        }
    }
}
const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
//ll.insertAt(500, 2)
//ll.getAt(2)
//ll.removeAt(2)

//ll.clearList() // doesnt remove it from memory
ll.printListData()
