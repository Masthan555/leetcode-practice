/* Masthan Swamy */

function findMaximum(l1, r1, l2, r2){
    let a = l1>r1?l1:r1;
    let b = l2>r2?l2:r2;

    return(a*b);
}

let l1 = 1, r1 = 4;
let l2 = 2, r2 = 9;

console.log(findMaximum(l1, r1, l2, r2));