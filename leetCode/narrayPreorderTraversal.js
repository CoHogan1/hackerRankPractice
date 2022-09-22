var preorder = function(root) {
    if(!root) return [];
    let stack = [ root ]
    let ans = []

    while(stack.length > 0){
        let curr = stack.pop()
        for (let i = curr.children.length -1; i >= 0; i--){
            stack.push(curr.children[i])
        }
        ans.push(curr.val)
    }
    return ans
};
