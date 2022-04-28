/* Masthan Swamy */

var lowerBound = (nums, target)=>{
    let start = 0;
    let end = nums.length;
    let l = -1;
    while(start <= end){
        let mid = Math.floor((end-start)/2)+start;
        if(nums[mid] == target){
            l = mid;
            end = mid-1; // Go and find further left
        }else if(nums[mid] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return l;
}

var upperBound = (nums, target)=>{
    let start = 0;
    let end = nums.length;
    let u = -1;
    while(start <= end){
        let mid = Math.floor((end-start)/2)+start;
        if(nums[mid] == target){
            u = mid;
            start = mid+1; // Go and find further right
        }else if(nums[mid] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return u;
}

var searchRange = function(nums, target) {
    return [lowerBound(nums, target), upperBound(nums, target)];
};

let nums = [1];
let target = 1;
console.log(searchRange(nums, target));