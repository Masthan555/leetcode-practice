/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * This below solution takes more time and less space
 
var findSum = (root1, root2, k)=>{
    if(!root1 || !root2) return false;

    let sum = root1.val+root2.val;
    if(sum == k && root1 != root2){
        return true;
    }else{
        if(sum < k){
            return (findSum(root1, root2.right, k) || findSum(root1.right, root2, k));
        }else{
            return findSum(root1.left, root2, k) || findSum(root1, root2.left, k);
        }
    }

}

var findTarget = function(root, k) {
    return (findSum(root.left, root, k) || findSum(root, root.right, k));      
};
*/

var findTarget = function(root, k) {
    if(!root) return false;

    let set = [];

    var inorder = (root)=>{
        if(!root) return false;

        if(set.includes(k-root.val)){
            return true;
        }
        set.push(root.val);

        return (inorder(root.left) || inorder(root.right));
    }

    return inorder(root)?true: false;
};


let root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(8);

let k = 5;
console.log(findTarget(root, k));