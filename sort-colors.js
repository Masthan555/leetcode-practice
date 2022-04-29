/* Masthan Swamy */


/**
 * DNF - Duth National Flag algorithm
 */

var swap = (nums, i, j)=>{
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var sortColors = function(nums) {
    let red = 0, white = 0, blue = nums.length-1;
    
    while(white<=blue){
        switch(nums[white]){
            case 0: 
                swap(nums, white, red);
                white++;
                red++;
                break;
            case 1: 
                white++;
                break;
            case 2: 
                swap(nums, white, blue);
                blue--;
                break;
        }
    }
    return nums;
};

let nums = [2,0,2,1,1,2];
console.log(sortColors(nums));