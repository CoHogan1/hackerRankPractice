// binary tree notes.

// binary trees
// at most 2 children per node
// one root
// at least one path between root and any node.

// root, parent, child, child, leaf.

//Node { val: 'root', left: null, right: null }

class Node {
    constructor(val){
        this.val = val     // 0
        this.left = null   // 1
        this.right = null  // 2
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

const test = new Node('root')
//console.log(test);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//console.log(a);

// Node {
//   val: 'a',
//   left: Node {
//     val: 'b',
//     left: Node { val: 'd', left: null, right: null },
//     right: Node { val: 'e', left: null, right: null }
//   },

//   right: Node {
//     val: 'c',
//     left: null,
//     right: Node { val: 'f', left: null, right: null }
//   }

// }

// function depthFirst(root){
//     if(root === null){ return [] }
//     const result = []
//     const stack = [ root ]
//
//     while(stack.length > 0){
//         const current = stack.pop()
//         result.push(current.val)
//         if(current.right){ stack.push(current.right) }
//         if(current.left ){ stack.push(current.left ) }
//     }
//     return result
// }

// console.log(depthFirst(a))
// console.log(depthFirst(null))

// same output.
const depthFirstValues = (root) => {
    if (root === null){ return [] }
    const leftV  = depthFirstValues(root.left)
    const rightV = depthFirstValues(root.right)
    return [root.val, ...leftV, ...rightV]
}

//console.log(depthFirstValues(a))

// breath first search.
// 0(n) time and space = 0(n)
function breathFirst(root){
    if (root === null){ return [] }
    const values = []
    const queue = [root]

    while(queue.length > 0){
        const current = queue.shift()
        values.push(current.val)
        if(current.left ){ queue.push(current.left )}
        if(current.right){ queue.push(current.right)}
    }
    return values
}

//console.log(breathFirst(a));



// see if value exists in a tree



function depthFirst(root){
    if(root === null){ return [] }
    const result = []
    const stack = [ root ]

    while(stack.length > 0){
        const current = stack.pop()
        result.push(current.val)
        if(current.right){ stack.push(current.right) }
        if(current.left ){ stack.push(current.left ) }
    }
    return result
}


depthFirst(a)
