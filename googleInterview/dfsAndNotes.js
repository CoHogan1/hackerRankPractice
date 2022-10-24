// Pre-order: parent → left child → right child
// In-order: left child → parent → right child
// Post-order: left child → right child → parent

class Node{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bst = new Node(27);
bst.left = new Node(14);
bst.left.left = new Node(10);
bst.left.right = new Node(19);
bst.right = new Node(35);
bst.right.left = new Node(31);
bst.right.right = new Node(42);

// Node {
//   val: 14,
//   left: Node { val: 10, left: null, right: null },
//   right: Node { val: 19, left: null, right: null } },

//   right: Node {
//   val: 35,
//   left: Node { val: 31, left: null, right: null },
//   right: Node { val: 42, left: null, right: null } } }


//      27
//     /   \
//   14     35
//  /  \   /  \
// 10 19  31  42



// function test(val, arr = [] ){
//     if (val === 0) return arr
//     arr.push(val)
//
//     return test(val -1, arr)
// }
//
// console.log(test(11));


const dfsRecursiveInOrder = (node, arr = []) => {
    if(!node) return;

    if(node.left) dfsRecursiveInOrder(node.left, arr);

    arr.push(node.val);

    if(node.right) dfsRecursiveInOrder(node.right, arr);

    return arr;
}

//console.log(dfsRecursiveInOrder(bst));


var rangeSumBST = function(root, low, high) {
    let sum = 0
    dfs(root)
    return sum

    function dfs(node){
        if(!node) return;
        if (node.val < low)  dfs(node.right);
        if (node.val > high) dfs(node.left);

        sum += node.val
        dfs(node.left)
        dfs(node.right)
    }
};

console.log(rangeSumBST([10,5,15,3,7,null,18]));



const dfs = (graph, source) => {
    const stack = [ source ]; // stack deep
    while (stack.length > 0){
        const curr = stack.pop() //remove last
        console.log(curr);
        for (let neighabor of graph[curr]){
            stack.push(neighabor)
        }
    }
}

const bfs = (graph, source) => {
    const queue = [ source ]; // queue takes a breath
    while(queue.lenght > 0){
        const curr = queue.shift() // remove first
        console.log(curr);
        for (let neighabor of graph[curr]){
            queue.push(neighabor)
        }
    }
}


function merge (left, right) {
    if (!left) {
        return right;
    } else if (!right) {
        return left;
    } else if (left.val < right.val){
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}


function helper(lists, start, end) {
    if (start === end) {
        return lists[start];
    } else if (start < end) {
        const mid = parseInt((start + end) / 2);
        const left = helper(lists, start, mid);
        const right = helper(lists, mid + 1, end);
        return merge(left, right);
    } else {
        return null;
    }

}

var mergeKLists = function(lists) {
    return helper(lists, 0, lists.length - 1);
};
