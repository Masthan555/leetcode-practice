/* Masthan Swamy */

var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let rotted = [];
      
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 2){
                rotted.push({i, j});
            }
        }
    }

    rotted.push(null);
    let timeLapse = 0;

    while(rotted.length != 0){
        let pair = rotted.shift();

        if(pair == null){
            if(rotted.length != 0){
                timeLapse++;
                rotted.push(null);
            }  
            continue;
        }

        let neighbours = [[pair.i-1, pair.j], [pair.i, pair.j+1],
                          [pair.i+1, pair.j], [pair.i, pair.j-1]];

        for(let i=0; i<neighbours.length; i++){
            let [x, y] = neighbours[i];
            if(x<0 || y<0 || x>=m || y>=n) continue;

            if(grid[x][y] == 1){
                grid[x][y] = 2;
                rotted.push({i:x, j: y});
            }

        }
    }

    // Final loop to check whether any fresh orange is available
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1){
                return -1;
            }
        }
    }

    return timeLapse;
};

let grid = [[0,2]];
console.log(orangesRotting(grid));