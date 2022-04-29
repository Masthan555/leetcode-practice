

var rotate = function(matrix) {
    let n = matrix.length;  

    let temp = [];  //Array.from({length: n}, ()=> Array.from({length: n}));
    for(let i in matrix){
        temp[i] = [...matrix[i]];
    }

    let x = 0, y = n-1;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            // console.log(temp[j][i]);
            if(x<n && y<n){
                matrix[x][y] = temp[j][i];
                if(y == 0){
                    x = x+1;
                    y = n;
                }
                y--;
            }
        }
    }

    return matrix;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(matrix));