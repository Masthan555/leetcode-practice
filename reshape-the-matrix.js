/* Masthan Swamy */

/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(r*c) or O(m*n)
 */
var matrixReshape = function(mat, r, c) {
    let size = mat.length*mat[0].length;
    if(size != (r*c)){
        /**
         * Display original matrix, if reshape not possible
         */
        return mat;
    }

    let m = mat.length;
    let n = mat[0].length;
    let index = 0;
    let reshaped = Array.from({length: r}, ()=> Array.from({length: c}));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let newRow = Math.floor(index/c);
            let newCol = index%c;
            reshaped[newRow][newCol] = mat[i][j];
            index++;
        }
    }
    mat = null;
    return reshaped;
};

let mat = [[1,2],[3,4]];
let r = 1;
let c = 4;
console.log(matrixReshape(mat, r, c));