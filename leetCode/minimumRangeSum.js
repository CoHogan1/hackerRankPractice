var minDepth = function(root) {
    if (!root) return 0;


    const search(node, l = 0, r = 0){
        if (!node) return;

        if(node.left){
             l++
             search(node.left, l, r)
        }
        if (node.right){
            r++
            search(node.right, l, r)
        }

    }
    if (root.left){
        search(root.left)
    }

    if (root.right){
        search(root.right)
    }
};

console.log(minDepth([3,9,20,null,null,15,7]))
