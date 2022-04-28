/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isMirror = (left, right)=>{
    if(!left && !right) return true;
    if(right && !left) return false;
    if(left && !right) return false;
    if(left.val != right.val) return false;

    
    return(isMirror(left.left, right.right) && isMirror(left.right, right.left));
}

var isSymmetric = function(root) {
    if(!root) return true;

    return(isMirror(root.left, root.right));
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));