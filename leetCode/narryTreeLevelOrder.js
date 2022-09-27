var levelOrder = function(root) {
    if (root === null) return [];
    let result = [];
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let arr = [];

        for (let i = 0; i < queue.length; i++) {
            let dequeued = queue.shift();
            arr.push(dequeued.val);

            for (let child of dequeued.children) {
                if (child !== null) {
                    queue.push(child);
                }
            }
        }

        result.push(arr);
    }

    return result;
};


var levelOrder = function(root) {
    if (!root) return [];
    let ans = []
    let que = [ root ]

    while (que.length > 0){
        let len = que.length
        let temp = []
        for (let i = 0; i< len; i++){
            let curr = que.shift()
            temp.push(curr.val)
            for (let n of curr.children){
                if (n) que.push(n);
            }
        }
        ans.push(temp)
    }
    return ans
};
