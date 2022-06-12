/* Masthan Swamy */

var getRow = function(rowIndex) {
    let row = [];  

    row[0] = 1;    // For NC0

    for(let i=1; i<=rowIndex; i++){
        row[i] = row[i-1] * (rowIndex - i+1)/i;
    }

    return row;
};

let rowIndex = 6;
console.log(getRow(rowIndex));