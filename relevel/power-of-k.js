/* Masthan Swamy */

function isPowerOfK(k ,n){
    
    while(n > 1){
        n = n/k;
    }

    return n == 1;
}

/**
 * Calculate total sum of first n natural numbers and then subtract the k powers from it.
 */
function Sum(k, n){ 
    let result = (n*(n+1))/2;

    // Now calculate prefix sum power of k, that is just lesser than n
    let powerSumToBeSubtracted = 1;
    let oldPower = 1;
    for(let i=1; i<n; i++){
        oldPower = oldPower * k;
        if(oldPower > n) break;

        powerSumToBeSubtracted += oldPower;
    }

    return (result - 2*powerSumToBeSubtracted);
}

let n = 2;
let k = 3;

console.log(Sum(k, n));