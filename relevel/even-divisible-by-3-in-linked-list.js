/* Masthan Swamy */

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

var printNumbers = (head)=>{
    if(!head) return "EMPTY";

    let res = "";
    let temp = head;

    while(temp){
        if(temp.data%2 == 0 && temp.data%3 == 0){
            res = res + temp.data + " ";
        }
        temp = temp.next;
    }

    return (res.trim().length != 0)?res:"EMPTY";
}


// let head = new Node(-6);
// head.next = new Node(1);
// head.next.next = new Node(6);

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(6);

console.log(printNumbers(head));