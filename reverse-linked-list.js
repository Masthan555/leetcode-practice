/* Masthan Swamy */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let mainHead = null;
var reverseList = function(head) {
    if(!head.next){
        mainHead = head;
        return head;
    }
    let prev = reverseList(head.next);
    prev.next = head;
    head.next = null;
    return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

reverseList(head);
console.log(mainHead);