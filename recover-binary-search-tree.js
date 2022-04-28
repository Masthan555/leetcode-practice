/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/*
var morrisInorder = (root)=>{
    let arr = [];

    let curr = root;
    let prev;
    let dummy = tail = new TreeNode();
    dummy.right = tail;
    while(curr){
        if(curr.left){
            // traverse till the right most node of left subtree
            prev = curr.left;
            while(prev.right)   
                prev = prev.right;

            let temp = curr.left;
            curr.left = null;
            prev.right = curr;
            curr = temp;
        }else{
            arr.push(curr.val);
            tail.right = curr;
            tail = tail.right;
            curr = curr.right;

        }
    }
    return [arr, dummy.right];
}
*/
let a = b = c = null;
let prev;
var inorder = (root)=>{
    if(!root) return null;

    inorder(root.left);
    
    if(prev.val>root.val){
        if(a == null){
            a = prev;
            b = root;
        }else{
            c = root;
        }
    }
    prev = root;

    inorder(root.right);
}

var recoverTree = function(root) {

    // inorder traverse the tree and find invalid nodes
    a = b = c = null;
    prev = new TreeNode(Number.MIN_SAFE_INTEGER);
    inorder(root);
    
    if(a && b){
        a.val = a.val + b.val;
        b.val = a.val-b.val;
        a.val = a.val-b.val;
    }
    if(a && c){
        a.val = a.val + c.val;
        c.val = a.val-c.val;
        a.val = a.val-c.val;
    }

    return root;
};

let root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

recoverTree(root);
console.log(root);