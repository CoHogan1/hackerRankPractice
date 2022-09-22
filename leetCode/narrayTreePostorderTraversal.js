var postorder = function(root) {
    if(!root) return [];
    let stack = [ root ]
    let ans = []

    while(stack.length > 0){
        let curr = stack.pop()
        for (let child of curr.children){
            stack.push(child)
        }
        ans.unshift(curr.val)
    }
    return ans
};
