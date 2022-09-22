var preorderTraversal = function(root) {
    if(!root) return [];
    let ans = []
    dfs(root)
    return ans

    function dfs(node){
        if(!node) return;
        ans.push(node.val)

        if(node.left) {dfs(node.left)}
        if(node.right){dfs(node.right)}
    }
};
