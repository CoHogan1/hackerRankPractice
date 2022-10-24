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
