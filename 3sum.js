/* Masthan Swamy */

var threeSum = function(nums) {
    
    let n = nums.length;
    nums.sort((a,b)=> a-b );

    let res = [];
    console.log(nums);
    for(let i=0; i<n-2;){
        let j=i+1, k=n-1;
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum == 0){
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(nums[j-1] == nums[j]){
                    j++;
                }
            }else if(sum>0){
                k--;
            }else{
                j++;
            }
        }
        i++;
        while(nums[i-1] == nums[i]){
            i++;
        }
    }

    return res;
};

let nums = [-1,0,1,2,2,-1,-1];
console.log(threeSum(nums));