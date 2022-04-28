/* Masthan Swamy */

function TreeNode(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
 };

//  if(!left || !right) return;

//  left.next = right;

//  connect(left.left, left.right);
//  connect(right.left, right.right);

//  if(left.right && right.left){
//      connect(left.right, right.left);
//  }


var connect = function(root) {
    if(!root || !root.left || !root.right) return;

    root.left.next = root.right;

    if(root.next)
        root.right.next = root.next.left;

    connect();
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

connect(root.left, root.right);
console.log(root.left.left);