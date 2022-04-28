/* Masthan Swamy */

/*
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    
    let remainingShifts = k%n;
    let wholeShifts = Math.floor(k/n);
    for(let i=0; i<wholeShifts; i++){
        // shift last index of array to first
        grid.unshift(grid[m-1]);
        grid.pop();
    }

    // console.log(remainingShifts, wholeShifts);
    console.log(grid);
    // Now perform remaining shifts
    for(let i=0; i<remainingShifts; i++){
        let temp = grid[m-1][n-1];
        for(let x=m-1; x>=0; x--){
            for(let y=n-1; y>=1; y--){
                grid[x][y] = grid[x][y-1];
            }
            if(x-1 >= 0)
                grid[x][0] = grid[x-1][n-1];
        }
        grid[0][0] = temp;
    }

    return grid;
};
*/

var shiftGrid = function(grid, k){
    let m = grid.length;
    let n = grid[0].length;
    let res = Array.from({length: m}, ()=> Array.from({length: n}));

    for(let i=0; i<(m*n); i++){
        const [x1, y1] = [ Math.floor(i/n), i%n ];
        const j =  (i+k)%(m*n);
        const [x2, y2] = [ Math.floor(j/n), j%n ];
        console.log(x1, y1, x2, y2);
        res[x2][y2] = grid[x1][y1];
    }

    return res;
}

let grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]];
let k = 6;
console.log(shiftGrid(grid, k));