/* Masthan Swamy */

const {Queue} = require("./Queue");

class Node{
    constructor(data){
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

let res = [];
let bfs = (root, queue)=>{
    if(!root) return;

    if(root.left) queue.enque(root.left);
    if(root.right) queue.enque(root.right);
    
    let node = queue.deque();

    if(node)
        res.push(node.val);

    bfs(node, queue);
}

var trimBST = function(root, low, high) {
    if(!root) return null;
    
    if(root.val<low){
        root = root.right;
        root = trimBST(root, low, high);
    }else if(root.val>high){
        root = root.left;
        root = trimBST(root, low, high);
    }
    
    if(root && root.left)
        root.left = trimBST(root.left, low, high);
    if(root && root.right)
        root.right = trimBST(root.right, low, high);

    return root;
};

let root = new Node(3);
root.left = new Node(0);
root.right = new Node(4);
root.left.right = new Node(2);
root.left.right.left = new Node(1);

root = trimBST(root, 3, 6);

if(root)
    res.push(root.val);
bfs(root, new Queue());
console.log(res);