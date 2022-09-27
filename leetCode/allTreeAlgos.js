var inorderTraversal = function(root) {
    let result = [];
    dfs(root);
    return result;

    function dfs(root) {
        if(!root) return ;
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
};

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
