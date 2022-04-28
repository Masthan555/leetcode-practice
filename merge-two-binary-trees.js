/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let passLeftNodeOrNull = (node)=>{
    return(node?node.left:null);
}
let passRightNodeOrNull = (node)=>{
    return(node?node.right:null);
}

var mergeTrees = function(root1, root2) {
    if(!root1 && !root2) return null;

    let sum = 0;
    if(root1) sum += root1.val;
    if(root2) sum += root2.val;
    let root = new TreeNode(sum);  
    
    root.left = mergeTrees(passLeftNodeOrNull(root1), passLeftNodeOrNull(root2));
    root.right = mergeTrees(passRightNodeOrNull(root1), passRightNodeOrNull(root2));

    return root;
};

let root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.left.left = new TreeNode(5);
root1.right = new TreeNode(2);

let root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.left.right = new TreeNode(4);
root2.right = new TreeNode(3);
root2.right.right = new TreeNode(7);

let temp = mergeTrees(root1, root2);
console.log(temp);