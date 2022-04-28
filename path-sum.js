/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(root.val == targetSum && !root.left && !root.right){ // It is leaf node and the targetSum matches
        return true;
    }

    if(root.left) root.left.val += root.val;
    if(root.right) root.right.val += root.val;    
    
    return(hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum));
};