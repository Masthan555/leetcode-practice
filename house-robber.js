/* Masthan Swamy */

/**
 * Below is Recursive approach, Scroll for Dynamic Programming approach
var rob = function(nums) {
    let dp = [];
    var ans = 0;

    let distinctWays = (start, val)=>{
        if(start>=nums.length-1){
            if(val)
                ans = Math.max(ans, val);
            return ans;
        }

        // let sum = 0;
        for(let i=start; i<nums.length; i++){
            if(i<=start+1) continue;
            distinctWays(i, val+nums[i]);
        }
        ans = Math.max(ans, val);
    }

    distinctWays(0, nums[0]); 
    distinctWays(1, nums[1]);

    return ans;
};
*/
var rob = function(nums) {
    let dp = [];
    let distinctWays = (start, val)=>{
        if(start>=nums.length-2){
            return val;
        }

        if(dp[start] != undefined){
            return dp[start];
        }

        let max = 0;
        for(let i=start+2; i<nums.length; i++){
            max = Math.max(max, distinctWays(i, nums[i]));
        }
        dp[start] = val+max;

        return val+max;
    }

    return Math.max(distinctWays(0, nums[0]), distinctWays(1, nums[1]?nums[1]:0));
};

// let nums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 let nums = [88, 19, 96, 51, 56, 87, 37, 65, 64, 27, 30, 97, 42, 68, 54]; //, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// let nums = [1,2,3,1];
console.log(rob(nums));
// console.log(ans);