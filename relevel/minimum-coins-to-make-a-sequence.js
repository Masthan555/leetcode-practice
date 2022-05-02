/* Masthan Swamy */

/**
 * The best and efficient way of solving this problem is to:
 * Finding LCS (Longest common subsequence) of both  strings and substract the LCS length from A string length
 * https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/?ref=lbp
 */

function LCS(A, B, m, n, dp){
    if(m == 0 || n == 0){
        return 0;
    }
    
    if(dp[m-1][n-1] != undefined){
        return dp[m-1][n-1];
    }
    
    if(A[m-1] == B[n-1]){
        return dp[m-1][n-1] = 1 + LCS(A, B, m-1, n-1, dp);
    }  

    return dp[m-1][n-1] = Math.max(LCS(A, B, m, n-1, dp), LCS(A, B, m-1, n, dp));
}

let findMinimumCoins = (A, B, m, n)=>{
    let dp = Array.from({length: m}, ()=> Array.from({length: n}));

    let lcs_length = LCS(A, B, m, n, dp);

    return(A.length - lcs_length);
}


let A = [1, 2, 3];
let B = [2, 5, 5, 4, 3];
let m = A.length;
let n = B.length;

console.log(findMinimumCoins(A, B, m, n));
