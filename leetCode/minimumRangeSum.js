var minDepth = function(root) {
    if(!root) return 0;
    let min = Infinity

    dfs(root, 1)
    return min

    function dfs(node, depth){
        if(!node) return 0;

        if(!node.right && !node.left){
            min = Math.min(min, depth)
        }

        dfs(node.left, depth +1)
        dfs(node.right, depth +1)
    }
};
