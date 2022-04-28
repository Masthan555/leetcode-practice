/* Masthan Swamy */

/**
 * Recursive Approach, given TLE for worst case of n = 45
var climbStairs = function(n) {
    let ans = 0;
    
    let backtrack = (n, val)=>{
        if(val == n){
            ans++;
            return;
        }
        if(val>n) return;

        for(let i=1; i<=2; i++){
            backtrack(n, val+i);
        }
    }
    backtrack(n, 0);
    return ans;
};
 */

/**
 * Optimised with Dynamic Programming
 */

var climbStairs = function(n) {
    let dp = [];

    let distinctWays = (n, val)=>{
        if(val == n){
            return 1;
        }
        if(val>n) return 0;

        if(dp[val]) return dp[val];

        let sum = 0;
        for(let i=1; i<=2; i++){
            sum += distinctWays(n, val+i);
        }
        dp[val] = sum;

        return sum;
    }

    return distinctWays(n, 0);
};

let n = 5;
console.log(climbStairs(n));