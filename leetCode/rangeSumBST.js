var rangeSumBST = function(root, low, high) {
    let sum = 0
    dfs(root)
    return sum

    function dfs(node){
        if(!node) return;
        if (node.val < low){
            dfs(node.right)
            return
        };
        if (node.val > high){
            dfs(node.left)
            return
        };

        sum += node.val
        dfs(node.left)
        dfs(node.right)
    }
};
