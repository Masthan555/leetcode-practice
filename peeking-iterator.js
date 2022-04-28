/* Masthan Swamy */

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

class PeekingIterator{
    constructor(iterator){
        this.data = [];
        while(iterator.hasNext()){
            this.data.push(iterator.next());
        }
        this.current = 0;
    }

    peek(){
        return (this.data[this.current+1])
    }

    next(){
        return (this.data[++this.current]);
    }

    hasNext(){
        return(this.data[this.current+1] != undefined);
    }
}