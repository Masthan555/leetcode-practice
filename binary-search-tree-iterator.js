/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var BSTIterator = function(root) {
    root = this.makeSkewUsingMorris(root);
    this.curr = root;
};

BSTIterator.prototype.makeSkewUsingMorris = (root)=>{
    let tree = [];
    let dummy = new TreeNode();
    let tail = dummy;
    let prev;
    let curr = root;
    while(curr){
        if(curr.left){
            prev = curr.left;
            // traverse till the right most node of left subtree
            while(prev.right) prev = prev.right;

            let temp = curr.left;
            prev.right = curr;
            curr.left = null;
            curr = temp;
        }else{
            tail.right = curr;
            tail = tail.right;
            curr = curr.right;
        }
    }
    return dummy;
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let temp= this.curr.right;
    this.curr = this.curr.right;
    return(temp.val);
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return(this.curr.right != null);
};


let root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

let iterator = new BSTIterator(root);

console.log(iterator.hasNext());
console.log(iterator.next());