/* Masthan Swamy */

function isPrime(n){
    let flag = true;

    for(let i=Math.sqrt(n); i>=1; i--){
        let val = n/i;
        let intVal = parseInt(val);

        if(val == intVal){
            flag = false;
            break;
        }
    }

    return flag;
}

function fact(n){
    if(n==1 || n==0) return n;
    return n*fact(n-1);
}

var permutationCount = 0
function Subsets(nums, output, index){
    if(index == nums.length){
        // console.log(output.length);
        if(output.length != 0){
            permutationCount += fact(output.length);
        }
        return;
    }

    Subsets(nums, [...output], index+1);

    output.push(nums[index]);
    Subsets(nums, [...output], index+1);

    return permutationCount;
}

function primePermutations(nums){
    let temp = [];
    // remove prime numbers
    for(let i=0; i<nums.length; i++){
        if(isPrime(nums[i])){
            temp.push(nums[i]);
        }
    }

    permutationCount = 0;
    return Subsets(temp, [], 0);
}

let nums = [2, 3, 5, 9];
console.log(primePermutations(nums));