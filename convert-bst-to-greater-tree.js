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

let max = 0;
var convertBST = function(root) {
    if(!root) return null;

    convertBST(root.right);
    root.val = root.val + max;
    max = root.val;
    convertBST(root.left);    

    return root;
};

let root = new Node(4);
root.left = new Node(1);
root.left.left = new Node(0);
root.left.right = new Node(2);
root.left.right.right = new Node(3);

root.right = new Node(6);
root.right.left = new Node(5);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

convertBST(root);

if(root)
    res.push(root.val);
bfs(root, new Queue());
console.log(res);