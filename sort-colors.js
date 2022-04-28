/* Masthan Swamy */

var sortColors = function(nums) {
    let red = -1, white = -1;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0){
            let temp = nums[++red];
            nums[red] = 0;
            nums[i] = temp;
        }
    }

    return nums;
};

let nums = [2,0,2,1,1,0];
console.log(sortColors(nums));