/* Masthan Swamy */

var searchMatrix = function(matrix, target) {

    /**
     * We can do Binary search on answer as the matrix is sorted in both row wise and column wise
     */

    let m  = matrix.length;
    let n = matrix[0].length;

    let start = 0;
    let end = (m*n);

    while(start<=end){
        let mid = Math.floor((end-start)/2)+start;

        let row = Math.floor(mid/n);
        let col = mid%n;

        if(matrix[row] && matrix[row][col] == target){
            return true;
        }else if(matrix[row] && matrix[row][col] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }

    return false;
};

let matrix = [[1]];

let target = 2;
console.log(searchMatrix(matrix, target));