/* Masthan Swamy */

var twoSum = function(nums, target) {
    
    // Before we sort array lets store indices in array itself for reference
    for(let i=0; i<nums.length; i++){
        nums[i] = [nums[i], i];
    }

    // Now sort the array for easy calculation of two sum
    nums.sort((a,b)=> a[0]-b[0] );

    let i=0;
    let j = nums.length-1;
    console.log(nums);
    while(i<j){
        let sum = nums[i][0]+nums[j][0];
        if(sum == target){
            return [nums[i][1], nums[j][1]];
        }else if(sum>target){
            j--;
        }else{
            i++;
        }
    }
};

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));