/* Masthan Swamy */

let findLengthOfIsland = (grid, i, j, visited)=>{
    if(i<0 || j<0 || i>=grid.length || j>=grid[0].length) return 0;
    if(visited[i][j]) return 0;
    if(grid[i][j] == 0) return 0;

    visited[i][j] = true;
    let top = findLengthOfIsland(grid, i-1, j, visited);
    let right = findLengthOfIsland(grid, i, j+1, visited);
    let bottom = findLengthOfIsland(grid, i+1, j, visited);
    let left = findLengthOfIsland(grid, i, j-1, visited);

    return(top+right+bottom+left+1);
}

var maxAreaOfIsland = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let visited = new Array(m);
    for(let i=0; i<visited.length; i++){
        visited[i] = new Array(n).fill(false);
    }

    let max = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let island = findLengthOfIsland(grid, i, j, visited);
            max = Math.max(max, island);
        }
    }

    return max;
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]];

console.log(maxAreaOfIsland(grid));