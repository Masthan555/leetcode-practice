/* Masthan Swamy */


function swap(nums, i, j){
    if(i==j) return;
    nums[i] = nums[i] ^ nums[j];
    nums[j] = nums[i] ^ nums[j];
    nums[i] = nums[i] ^ nums[j];
}

function reverse(nums, start, end){
    let i=start, j=end-1;
    let n = nums.length;
    while(i<j && j<n){
        swap(nums, i, j);
        i++; j--;
    }
}

var rotate = function(nums, k) {
    let n = nums.length;

    k = k%n;

    reverse(nums, 0, n);
    reverse(nums, 0, k);
    reverse(nums, k, n);

    return nums;
};

let nums = [1,2,3];
console.log(rotate(nums, 4));
