/* Masthan Swamy */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    if(!head) return null;
    
    let dummy = new ListNode();
    dummy.next = head;
    let curr = head;

    while(head){
        while(head && curr.val == head.val){
            head = head.next;
        }
        
        curr.next = head;
        if(head){
            head = head.next;
            curr = curr.next;
        }
        
    }

    return dummy.next;
};

let head = new ListNode();
// head.next = new ListNode(2);
// head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(3);
// head.next.next.next.next = new ListNode(3);

let temp = deleteDuplicates(head);
console.log(temp);