/* Masthan Swamy */

var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;

    while(start<=end){
        let mid = Math.floor((end-start)/2)+start;

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] >= nums[start]){
            if(target>=nums[start] && target<=nums[mid]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }else{
            if(target>=nums[mid] && target<=nums[end]){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
    }

    return -1;
};

let nums = [4,5,6,7,8,0,1,2];
let target = 0;

console.log(search(nums, target));