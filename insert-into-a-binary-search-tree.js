/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var insertIntoBST = function(root, val) {
    if(!root){
        root = new TreeNode(val);
        return root;
    }
    
    if(val > root.val){
        if(!root.right){
            root.right = new TreeNode(val);
        }else{
            insertIntoBST(root.right, val);
        }
    }else{
        if(!root.left){
            root.left = new TreeNode(val);
        }else{
            insertIntoBST(root.left, val);
        }
    }
    return root;
};