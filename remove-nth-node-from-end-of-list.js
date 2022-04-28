/* Masthan Swamy */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
/*
var removeNthFromEnd = function(head, n) {
    if(!head) return null;
    
    let slow = head;
    let fast = head;

    let size=1;
    while(fast.next){
        fast = fast.next;
        size++;
    }

    // if(size == 1 && n==1)   return null;
    if(size == n)   return head.next;

    let toBeTraversed = size-n;
    while(toBeTraversed > 1){
        slow = slow.next;
        toBeTraversed--;
    }
    
    slow.next = slow.next.next;

    return head;
};*/

var removeNthFromEnd = function(head, n) {
    let start = new ListNode(0);
    let slow = start;
    let fast = start;

    slow.next = head;

    for(let i=0; i<=n; i++){
        fast = fast.next;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return start.next;
}