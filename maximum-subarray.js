/* Masthan Swamy */

/**
 * Below code is - Kadane's Algorithm
 */
var maxSubArray = function(nums) {
    let current_maximum = nums[0];
    let maximum_so_far = nums[0]; 
    
    for(let i=1; i<nums.length; i++){
        current_maximum = Math.max(nums[i], current_maximum+nums[i]);
        maximum_so_far = Math.max(maximum_so_far, current_maximum);
    }

    return maximum_so_far;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));