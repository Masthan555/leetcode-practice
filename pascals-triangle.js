/* Masthan Swamy */

var generate = function(numRows) {
    let pascals = [[1]];
    
    for(let i=1; i<numRows; i++){
        pascals.push([]);
        for(let j=0; j<=i; j++){
            if(pascals[i-1][j-1] && pascals[i-1][j])
                pascals[i][j] = pascals[i-1][j-1] + pascals[i-1][j];
            else if(!pascals[i-1][j-1])
                pascals[i][j] = pascals[i-1][j];
            else if(!pascals[i-1][j])
                pascals[i][j] = pascals[i-1][j-1];
        }
    }
    return pascals;
};

let numRows = 5;
console.log(generate(numRows));