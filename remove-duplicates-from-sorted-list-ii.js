/* Masthan Swamy */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    if(!head) return null;

    let dummy = new ListNode(Number.MAX_SAFE_INTEGER);
    dummy.next = head;
    let curr = dummy;
    let temp = head;

    while(temp && temp.next){
        let repeated = null;
        while(temp && ((temp.next && (temp.val == temp.next.val)) || temp.val == repeated)){
            repeated = temp.val;
            temp = temp.next;
        }

        curr.next = temp;
        if(temp)
            temp = temp.next;
        curr = curr.next;
    }

    
    return dummy.next;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(3);
// head.next.next.next.next = new ListNode(4);
// head.next.next.next.next.next = new ListNode(4);
// head.next.next.next.next.next.next = new ListNode(5);

let res = deleteDuplicates(head);

while(res){
    console.log(res.val);
    res = res.next;
}