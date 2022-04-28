/* Masthan Swamy */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
    if(!root) return [];

    let res = [];
    let temp = [];
    let queue = [root, null];
    while(queue.length != 0){
        let popped = queue.shift();
        if(popped == null){
            res.push(temp);
            temp = [];
            
            if(queue.length != 0)
                queue.push(null);
            continue;
        }

        temp.push(popped.val);
        if(popped.left) queue.push(popped.left);
        if(popped.right) queue.push(popped.right);

    }

    return res;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));