var postorderTraversal = function(root) {
    if(!root) return [];
    let ans = []
    dfs(root)
    return ans

    function dfs(node){
        if (!node) return;
        if (node.left) { dfs(node.left) }
        if (node.right){ dfs(node.right)}
        ans.push(node.val)
    }
};
