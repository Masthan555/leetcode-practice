/* Masthan Swamy */

function getSurroundSum(board, r, c){
    let m = board.length;
    let n  = board[0].length;
    let sum = 0;

    if((r-1)>=0 && c>=0 && (r-1)<m && c<n)   sum += board[r-1][c];
    if((r-1)>=0 && (c+1)>=0 && (r-1)<m && (c+1)<n)   sum += board[r-1][c+1];
    if((r)>=0 && (c+1)>=0 && (r)<m && (c+1)<n)   sum += board[r][c+1];
    if((r+1)>=0 && (c+1)>=0 && (r+1)<m && (c+1)<n)   sum += board[r+1][c+1];
    if((r+1)>=0 && (c)>=0 && (r+1)<m && (c)<n)   sum += board[r+1][c];
    if((r+1)>=0 && (c-1)>=0 && (r+1)<m && (c-1)<n)   sum += board[r+1][c-1];
    if((r)>=0 && (c-1)>=0 && (r)<m && (c-1)<n)   sum += board[r][c-1];
    if((r-1)>=0 && (c-1)>=0 && (r-1)<m && (c-1)<n)   sum += board[r-1][c-1];
    
    return sum;
}

function canBeDead(board, r, c){
    let sum = getSurroundSum(board, r, c);

    if(board[r][c] == 1){
        if(sum < 2) return true;
        else if(sum == 2 || sum == 3) return false;
        else if(sum > 3) return true;
    }else{
        if(sum == 3) return false;
        else return true;
    }
}

var gameOfLife = function(board) {
    let m = board.length;
    let n  = board[0].length;
    let output = Array.from({length: m}, ()=> Array.from({length: n}));
    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            if(canBeDead(board, r, c)){
                output[r][c] = 0;
            }else{
                output[r][c] = 1;
            }
        }
    }

    board = output;
    console.log(board);
};

let board = [[1,1],[1,0]];
gameOfLife(board);