/* Masthan Swamy */

var generateMatrix = function(n) {
    let matrix = Array.from({length: n}, ()=> Array.from({length: n}));

    let startX = 0, endX = n-1;
    let startY = 0, endY = n-1;
    for(let count = 1; count<=(n*n);){

        // going right
        for(let i=startX; i<=endX; i++){
            matrix[startX][i] = count++;
        }
        // endX--;

        // going down
        for(let i=startY+1; i<=endY; i++){
            matrix[i][endX] = count++;
        }
        

        // going left
        for(let i=endX-1; i>=startX; i--){
            matrix[endX][i] = count++;
        }
        startX++;
        endX--;
        // endY--;

        // going up
        for(let i=endY-1; i>startY; i--){
            matrix[i][startY] = count++;
        }
        // startY++;
        startY++;
        endY--;
    }
    return matrix;
};

let n = 4;
console.log(generateMatrix(n));