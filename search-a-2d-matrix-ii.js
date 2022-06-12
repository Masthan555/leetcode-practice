/* Masthan Swamy */

/** 
*** Scroll for easy & efficient approach to solve this problem ***


var binarySearchOnColumn = (matrix, target, limit, col)=>{
    let start = 0, end = limit-1;
    while(start<=end){
        let mid = Math.floor((end-start)/2)+start;

        if(matrix[mid][col] == target){
            return true;
        }else if(matrix[mid][col] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }

    return false;
}

var searchMatrix = function(matrix, target) {
    
    // Find upper bound in x-axis
    let startX = 0, endX = matrix[0].length-1;
    let x = matrix[0].length;
    while(startX <= endX){
        let mid = Math.floor((endX-startX)/2)+startX;

        if(matrix[0][mid] == target){
            return true;
        }else if(matrix[0][mid] > target){
            x = mid;
            endX = mid-1;
        }else{
            startX = mid+1;
        }
    }

    // Find upper bound in y-axis
    let startY = 0, endY = matrix.length-1;
    let y = matrix.length;
    while(startY <= endY){
        let mid = Math.floor((endY-startY)/2)+startY;

        if(matrix[mid][0] == target){
            return true;
        }else if(matrix[mid][0] > target){
            y = mid;
            endY = mid-1;
        }else{
            startY = mid+1;
        }
    }

    // Now search in new boundary for the target
    for(let i=0; i<x; i++){
        let status = binarySearchOnColumn(matrix, target, y, i);
        if(status){
            return true;
        }
    }

    return false;
};
*/

var searchMatrix = function(matrix, target) {
    let i = 0;
    let j = matrix[0].length-1;
    
    while(i>=0 && j>=0 && i<matrix.length && j<matrix[0].length){
        if(matrix[i][j] < target){
            i++;
        }else if(matrix[i][j] > target){
            j--;
        }else{
            return true;
        }
    }

    return false;
};


let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 5;
console.log(searchMatrix(matrix, target));