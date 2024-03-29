var minDepth = function(root) {
    let depth = 1
    let queue = [root]
    while (queue.length > 0) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node === null) return 0
            if (node.left === null && node.right === null) return depth
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }
        depth++
    }
    return depth
};
