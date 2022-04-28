/* Masthan Swamy */

var hammingWeight = function(n) {
    let count = 0;
    
    while(n>0){
        if(n&1){
            count++;
        }
        n = n>>1;
    }
    return count;
};

let n = 0b11111111111111111111111111111101;
console.log(hammingWeight(n));