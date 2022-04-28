/* Masthan Swamy */

function TreeNode(data){
    this.data = data?data:null;
    this.left = null;
    this.right = null;
}

let morrisInorderTraversal = (root, k)=>{
    if(!root) return null;

    let curr = root, prev;
    let dummy = trail = new TreeNode();
    let i=0;
    while(curr){
        if(curr.left){
            prev = curr.left;
            
            while(prev.right)
                prev = prev.right;

            prev.right = curr;
            let temp = curr.left;
            curr.left = null;
            curr = temp;
        }else{
            i++;
            if(i==k)
                return curr.data;
            trail.right = curr;
            trail = trail.right;
            curr = curr.right;
        }
    }

    return dummy.right;
}

var kthSmallest = function(root, k) {
    return morrisInorderTraversal(root, k);
};

let root = new TreeNode(5);
root.left = new TreeNode(3);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
root.right = new TreeNode(6);

let k = 3;
console.log(kthSmallest(root, 1));