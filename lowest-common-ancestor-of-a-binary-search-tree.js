/* Masthan Swamy */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return 0;
    var lcaNode = 0;
    var lca = (root, p, q)=>{
        if(!root) return 0;
        let val = 0;
        if(root.val == p || root.val == q){
            val = 1;
        }

        let sum = lca(root.left, p, q) + lca(root.right, p, q) + val;
        if(sum == 2 && !lcaNode){
            lcaNode = root;
        }

        return (sum);
    }

    lca(root, p, q);
    return lcaNode;
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
// root.left.left = new TreeNode(0);
root.left.right = new TreeNode(2);
// root.left.right.left = new TreeNode(3);
// root.left.right.right = new TreeNode(5);
root.right = new TreeNode(4 );
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(root, 2, 3));