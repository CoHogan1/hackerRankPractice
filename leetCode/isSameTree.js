var isSameTree = function(p, q) {
    if(!p && !q){ return true }
    if(!p || !q || p.val !== q.val){ return false }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// recursion. lol


let x = {
    val: null,
    left: null,
    right: "Bob"
}

if (!x.val){
    console.log("anything");
}
if(!x.val){ console.log("something") }


console.log("Hi");
