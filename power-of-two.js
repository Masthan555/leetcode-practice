/* Masthan Swamy */

/**
 * Key Idea
    the binary form of every power of two likes 0b100...0, because pow(2, n) == 1 << n
    1 = 0b1
    2 = 0b10
    4 = 0b100
    8 = 0b1000
    ...
    the binary form of everypow(2, n) - 1 likes0b11..1
    1 - 1 = 0 = 0b0        =>  1 & 0 = 0b1    & 0b0    = 0
    2 - 1 = 1 = 0b1        =>  2 & 1 = 0b10   & 0b1    = 0
    4 - 1 = 3 = 0b11       =>  4 & 3 = 0b100  & 0b11   = 0
    8 - 1 = 7 = 0b111      =>  8 & 7 = 0b1000 & 0b111  = 0
    ...
    so we can find pow(2, n) & (pow(2, n) - 1) == 0
    for example, num = 4 = 0b100
    4 - 1 = 3 = 0b11
    4 & 3 = 0b100 & 0b11 = 0
    Amazing, right?
 */

var isPowerOfTwo = function(n) {
    return n>0 && ((n&n-1) == 0) ;
};

let n = 16;
console.log(isPowerOfTwo(n));
