/* Masthan Swamy */

class Queue{
    constructor(){
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }

    length(){
        return(this.rear-this.front);
    }

    isEmpty(){
        return(this.length() == 0);
    }

    enque(x){
        this.data[this.rear] = x;
        this.rear++;
    }   

    deque(){
        let val = this.data[this.front];
        this.front++;
        return val;
    }

    getFront(){
        return(this.data[this.front]);
    }
}

// let queue = new Queue();
// console.log(queue.getFront());
// queue.enque(10);
// queue.enque(20);
// queue.enque(30);


// console.log(queue.deque());
// console.log(queue.deque());
// console.log(queue.getFront());

module.exports = {Queue};