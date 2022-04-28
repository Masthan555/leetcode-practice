/* Masthan Swamy */

var sortedSquares = function(nums) {
    let n = nums.length;
    let i=0; j=n-1;
    let res = [];
    for(let p=n-1; p>=0; p--){
        if(Math.abs(nums[i])>Math.abs(nums[j])){
            res[p] = nums[i]*nums[i];
            i++;
        }else{
            res[p] = nums[j]*nums[j];
            j--;
        }
    }
    return res;
};

let nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));