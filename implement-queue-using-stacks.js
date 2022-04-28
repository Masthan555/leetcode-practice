/* Masthan Swamy */

function ListNode(data){
    this.data = data?data:null;
    this.next = null;
}

var MyQueue = function() {
    this.top = null;
    this.length = 0;  
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let node = new ListNode(x);
    node.next = this.top;
    this.top = node;
    this.length++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.empty()){
        let tempStack = null;
        while(this.top){
            let node = this.top;
            this.top = this.top.next;
            node.next = tempStack;
            tempStack = node;
        }
        // Now remove first element of temp stack
        let curr = tempStack;
        tempStack = tempStack.next;
        this.length--;
        let del = curr.data;
        curr = null

        // now copy back all values from tempStack to original stack
        while(tempStack){
            let node = tempStack;
            tempStack = tempStack.next;
            node.next = this.top;
            this.top = node;
        }

        return del;
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.empty()){
        let tempStack = null;
        while(this.top){
            let node = this.top;
            this.top = this.top.next;
            node.next = tempStack;
            tempStack = node;
        }
        // Now remove first element of temp stack
        let del = tempStack.data;

        // now copy back all values from tempStack to original stack
        while(tempStack){
            let node = tempStack;
            tempStack = tempStack.next;
            node.next = this.top;
            this.top = node;
        }

        return del;
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return(this.length == 0);
};



let obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj.peek());
console.log(obj.pop());