/* Masthan Swamy */

function Node(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    if(!head) return false;

    let slow = head;
    let fast = head;
    
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow == fast){
            return true;
        }
    }

    return false;
};

let head = new Node(3);
head.next = new Node(2);
head.next = head;
// head.next.next = new Node(0);
// head.next.next.next = new Node(4);
// head.next.next.next.next = head.next;

console.log(hasCycle(head));