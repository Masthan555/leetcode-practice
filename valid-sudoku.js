/* Masthan Swamy */

isValidPosition = (board, i, j)=>{
    let m = board.length;
    let n = board[0].length;
   
    let val = board[i][j];
    // verify row
    for(let c=0; c<n; c++){
        if(c==j) continue;
        if(board[i][c] == val){
            return false;
        }
    }
    // console.log("row");

    // verify column
    for(let r=0; r<m; r++){
        if(r==i) continue;
        if(board[r][j] == val){
            return false;
        }
    }
    // console.log("col");

    // verify 3*3 matrix
    let startRow, startCol;
    startRow = Math.floor(i/3)*3;
    startCol = Math.floor(j/3)*3;

    console.log(i, j, startRow, startCol);
    for(let r=startRow; r<(startRow+3); r++){
        for(let c=startCol; c<(startCol+3); c++){
            if(r==i && c==j) continue;
            if(board[r][c] == val){
                return false;
            }
        }
    }
    
    return true;
}

/**
 * Time Complexity: O(1) as m<=9 and n<=9, contant operations are performed
 * Space Complexity: O(1)
 */
var isValidSudoku = function(board) {
    let m = board.length;
    let n = board[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            // console.log(i, j, isValidPosition(board, i, j));
            if(board[i][j] != "."){
                if(!isValidPosition(board, i, j)){
                    return false;
                }
            }
        }
    }

    return true;
};

let board = 
[[".",".",".",".","5",".",".","1","."]
,[".","4",".","3",".",".",".",".","."]
,[".",".",".",".",".","3",".",".","1"]
,["8",".",".",".",".",".",".","2","."]
,[".",".","2",".","7",".",".",".","."]
,[".","1","5",".",".",".",".",".","."]
,[".",".",".",".",".","2",".",".","."]
,[".","2",".","9",".",".",".",".","."]
,[".",".","4",".",".",".",".",".","."]];

console.log(isValidSudoku(board));
