/* Masthan Swamy */


var findMinPath = (i, j, triangle, dp)=>{
    if(triangle[i] == undefined || triangle[i][j] == undefined) return 0;
    if(dp[i] != undefined && dp[i][j] != undefined){
        return dp[i][j];
    }

    let min = triangle[i][j] + Math.min(findMinPath(i+1, j, triangle, dp), findMinPath(i+1, j+1, triangle, dp));
    dp[i][j] = min;

    return min;
}

var minimumTotal = function(triangle) {
    let dp = Array.from({length: triangle.length}, ()=>[]);

    return findMinPath(0, 0, triangle, dp);
};

// let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
let triangle = [[-10]];
console.log(minimumTotal(triangle));