/* Masthan Swamy */

function TreeNode(data){
    this.data = data?data:null;
    this.left = null;
    this.right = null;
}

inorderTraversal = (root)=>{
    let curr = root, prev;
    let tail = new TreeNode(), dummy = tail;

    while(curr != null){
        if(!curr.left){
            tail.right = curr;
            tail = tail.right;
            curr = curr.right;
        }else{
            prev = curr.left;
            while(prev.right != null && prev.right != curr){
                prev = prev.right;
            }

            prev.right = curr;
            let temp = curr.left
            curr.left = null;
            curr = temp;
        }
    }

    return dummy.right;
}

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
root.right = new TreeNode(6);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(9);

inorderTraversal(root);