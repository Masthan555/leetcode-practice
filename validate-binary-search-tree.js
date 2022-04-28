/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var validBST = (root, ul, ll)=>{
    if(!root)   return true;
    if(root.val <= ll || root.val >= ul){
        return false;
    }

    return( validBST(root.left, root.val, ll) && validBST(root.right, ul, root.val) );
}

var isValidBST = function(root) {
    return validBST(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
};