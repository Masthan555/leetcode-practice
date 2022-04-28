/* Masthan Swamy */

var reverseBits = function(n) {
    let n = n.toString(2).split("");
    let i = 0;
    let len = n.length-1;
    console.log(n.toString(2));
    while(i<(len/2)){
        let temp = n[i];
        n[i] = n[len-i];
        n[len-i] = temp;
        i++;
    }
    console.log(n.toString(2));

    return n.toString(2);
};