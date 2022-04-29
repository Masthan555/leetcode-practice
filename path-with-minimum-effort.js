/* Masthan Swamy */

var calculateEffort = (heights, visited, i, j)=>{
    if((i == heights.length-1) && (j == heights[0].length-1)) return 0;
    if(i<0 || j<0) return Number.MIN_SAFE_INTEGER;
    if(i>heights.length-1 || j>heights[0].length-1) return Number.MIN_SAFE_INTEGER;
    if(visited[i][j]) return Number.MIN_SAFE_INTEGER;

    visited[i][j] = true;

    let top = calculateEffort(heights, visited, i-1, j);
    let right = calculateEffort(heights, visited, i, j+1);
    let down = calculateEffort(heights, visited, i+1, j);
    let left = calculateEffort(heights, visited, i, j-1);


    visited[i][j] = false;

    if(Math.max(top, right, down, left) == Number.MIN_SAFE_INTEGER) return heights[i][j];
    let val = Math.abs(heights[i][j]-Math.max(top, right, down, left));
    // console.log(val, heights[i][j], top, right, down, left, "Max: ", Math.max(top, right, down, left));
    return(val);
}

var minimumEffortPath = function(heights) {
    let m = heights.length;
    let n = heights[0].length;
    let visited = Array.from({length: m}, ()=> Array.from({length: n}).fill(false));

    // return visited;
    return calculateEffort(heights, visited, 0, 0);
};

let heights = [[1,2,2],[3,8,2],[5,3,5]];

console.log(minimumEffortPath(heights));