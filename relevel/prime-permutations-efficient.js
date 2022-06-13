/* Masthan Swamy */

let fact = [];
var m = 10e9;
function factorial(n){
    fact[0] = 1;
    for(let i=1; i<=n; i++){
        fact[i] = ((i%m)*fact[i-1])%m;
    }
}

function isPrime(n){
    let flag = true;
    for(let i=2; i*i <= n; i++){
        if(n%i == 0){
            flag = false;
            break;
        }
    }
    return flag;
}

function primePermutations(nums){
    let primeCount = 0;
    for(let i=0; i<nums.length; i++){
        if(isPrime(nums[i])){
            primeCount++;
        }
    }

    factorial(primeCount);

    let primePermutationCount = 0;
    for(let i=1; i<=primeCount; i++){
        primePermutationCount = (primePermutationCount + (fact[primeCount]/fact[primeCount-i])%m)%m;
    }

    return primePermutationCount;
}

let nums = [2, 3, 5, 9];
console.log(primePermutations(nums));