/* Masthan Swamy */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) 
 */
var moveZeroes = function(nums) {
    let i=0, j=1;
    let n = nums.length;
    while(j<n){
        if(nums[i] == 0){
            while(nums[j] == 0 && j<n){
                j++;
            }
            if(j<n){
                nums[i] = nums[j];
                nums[j] = 0;
            }
        }
        i++;
        j++;
    }
    console.log(nums);
};

let nums = [0, 0];
moveZeroes(nums);