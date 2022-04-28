/* Masthan Swamy */

var updateMatrix = function(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let dist = Array.from({length: m}, ()=>Array.from({length: n}).fill(Number.MAX_SAFE_INTEGER));
    let queue = [];
    // Fill zeros as they dont need traversal, and prepare BFS queue
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j] == 0){
                dist[i][j] = 0;
                queue.push({i,j});
            }
        }
    }

    console.log(queue);
    // Now do BFS traversal and set minimum distance for all 1's in the matrix
    while(queue.length != 0){
        let pair = queue.shift();

        let neighbours = [[pair.i, pair.j-1], [pair.i-1, pair.j], 
                          [pair.i, pair.j+1], [pair.i+1, pair.j]];

        for(let i=0; i<neighbours.length; i++){
            let rel = neighbours[i];
            if(rel[0] < 0 || rel[1] < 0 || rel[0]>=m || rel[1]>=n) continue;

            if(dist[rel[0]][rel[1]] > (dist[pair.i][pair.j]+1)){
                dist[rel[0]][rel[1]] = dist[pair.i][pair.j]+1;
                // again this neighour into queue for prrocessing its neighbours
                queue.push({i: rel[0], j: rel[1]});
            }

        }
    }

    return dist;
};

let mat = [[1,1,0,0,1,0,0,1,1,0],
           [1,0,0,1,0,1,1,1,1,1],
           [1,1,1,0,0,1,1,1,1,0],
           [0,1,1,1,0,1,1,1,1,1],
           [0,0,1,1,1,1,1,1,1,0],
           [1,1,1,1,1,1,0,1,1,1],
           [0,1,1,1,1,1,1,0,0,1],
           [1,1,1,1,1,0,0,1,1,1],
           [0,1,0,1,1,0,1,1,1,1],
           [1,1,1,0,1,0,1,1,1,1]]

// let mat = [[0,0,0],[0,1,0],[1,1,1]];
console.log(updateMatrix(mat));