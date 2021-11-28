// stack practice.


let stack = [] //;lifo data structure.

// push() places item at end of the array.
// pop()  removes item at the end of the array.

class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }
    // add elem to top of Stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`);
        this.count += 1
        return this.count - 1
    }

    // return and remove element from top of stack
    // return undefined if stack is empty
    pop(){
        if(this.count === 0){return undefined}
        let deleteItem = this.items[ this.count - 1 ]
        this.count -= 1
        console.log(`${deleteItem} removed`);
        return deleteItem
    }
    // check top element in stack1
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }
    // check if the stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty': "Stack is NOT empty");
        return this.count == 0
    }
    // check stack size.
    size(){
        console.log(`${this.count} elements in stack`);
        return this.count
    }
    // log emements in stack
    print(){
        let str = ''
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        console.log(str);
        return str
    }

    // clear stack
    clear(){
        this.items = []
        this.count = 0
        console.log("Stack cleared")
        return this.items
    }
}

const stack1 = new Stack()


stack1.isEmpty()

stack1.push(100)
stack1.push(200)
stack1.push(300)
stack1.print()

stack1.isEmpty()

stack1.peek()

stack1.pop()
stack1.pop()
stack1.size()

stack1.print()
stack1.clear()
stack1.print()
