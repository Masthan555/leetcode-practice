/* Masthan Swamy */

/*
const {Queue} = require("./Queue");

var firstUniqChar = function(s) {
    let chars = {};
    let res = new Queue();
    for(let c of s){
        if(chars[c]){
            chars[c]++;
        }else{
            chars[c] = 1;
        }
        if(chars[c]==1){
            res.enque(c);
        }
    }

    while(chars[res.getFront()]>1){
        res.deque();
    }

    if(res.getFront()){
        for(let i in s){
            if(s[i] == res.getFront()){
                return i;
            }
        }
    }

    return -1;
};
*/

    var firstUniqChar = function(s) {
        let chars = new Array(26).fill(0);
        for(let c of s){
            chars[c.charCodeAt()-97]++;
        }

        for(let i in s){
            if(chars[s[i].charCodeAt()-97] == 1){
                return i;
            }
        }
        return -1;
    };

let str = "letlcode";
console.log(firstUniqChar(str));