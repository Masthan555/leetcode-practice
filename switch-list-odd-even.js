/* Masthan Swamy */

function Node(data){
    this.data = data;
    this.next = null;
}

let rearrange = (head)=>{
    if(!head) return null;

    let slow = head;
    let second = head.next;
    let fast = head.next;

    while(fast && fast.next){
        slow.next = fast.next;
        slow = slow.next;
        fast.next = slow.next;
        slow.next = second;
        if(fast)
            fast = fast.next;
    }

    let temp = head;
    while(temp){
        console.log(temp.data);
        temp = temp.next;
    }
}

let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);
// head.next.next.next.next.next.next.next = new Node(8);

rearrange(head);