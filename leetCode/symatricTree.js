function preOt(head){
    if (head === null) return;
    preOt(head.left)
    left.push(head.val)
    preOt(head.right)
}

function postO(head){
    if (head === null) return;
    postO(head.left)
    postOt(head.right)
    right.push(head.val)
}
let left = []
let right = []

var isSymmetric = function(root) {
    preOt(head)
    postO(head)

    if(right.length != left.length) return false;
    for (let i = 0; i < left.length; i++){
        if (left[i] != right[i]) return false
    }
    return true
};
