/* Masthan Swamy */

var findMin = function(nums) {
    let start = 0;
    let end = nums.length-1;

    // let min = nums[0];
    let min = Number.MAX_SAFE_INTEGER;
    while(start<=end){
        let mid = Math.floor((end-start)/2) + start;

        // if(nums[mid]>=nums[start]){
        //     start = mid+1
        //     min = Math.min(min, nums[mid], nums[start]);
        // }else if(nums[mid]<=nums[end]){
        //     end = mid-1;
        //     min = Math.min(min, nums[mid], nums[end]);
        // }

        if(nums[end]<nums[start]){
            if(nums[mid]>=nums[start]){
                start = mid + 1;
            }else{
                end = mid;
            }
        }else{
            return nums[start];
        }

    }

    return min;
};

let nums = [18,11,12,13,15,17];
console.log(findMin(nums));