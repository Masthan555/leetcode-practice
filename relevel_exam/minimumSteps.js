/* Masthan Swamy */

process.stdin.resume(); // Begin reading from stdin so the process does not exit.
process.stdin.setEncoding('utf-8'); // this will set allowed character set to be utf-8 
 
let inputString = ""; // this will store the complete input in stdin and we will later process the input
let currentLine = 0; // this will maintain the current line of input that we are considering
 
process.stdin.on('data', function (userInput) { // it will be executed when user gives an input
    inputString = inputString + userInput; // 
});
 
process.stdin.on('end', function() { // ctrl + d -> as soon as stdin stops taking input , the end event hits
    inputString.trim(); // remove the leading spaces
    inputString = inputString.split("\n"); // return an array of strings where each index stores each line of input
    main(); // main logic
});
 
function readline() { // read a new line input from the array
    let result = inputString[currentLine];
    currentLine = currentLine + 1;
    return result;
}
 
function processArray(arr) { // '1 2 3 4'
    let temp = arr.split(" "); // ['1', '2', '3', '4']
    let result = []; // new result array
    for(let i = 0; i < temp.length; i++) {
        result.push(Number(temp[i])); // [] -> [1] -> [1,2] -> [1,2,3] -> [1,2,3,4]
     }
    return result; //[1,2,3,4]
}

function findCost(arr, x, k){
    let cost = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>=x){
            cost += arr[i]-x;
        }
    }

    if(cost <= k){
        for(let i=0; i<arr.length; i++){
            if(arr[i]>=x){
                arr[i] = x;
            }
        }
    }
    
    return cost;
}

function minSteps(arr, n, k){
    // initially sort the array
    arr.sort((a, b) => a-b );

    let minSteps = 0;
    let i=0;
    while(Math.max(...arr) != 0){
        if(arr[i] != 0){
            let x = 0;
            let cost = findCost(arr, x, k);
            while(cost > k){
                x++;
                cost = findCost(arr, x, k);
            }
            minSteps++;
        }
        i++;
        if(i>=arr.length){
            i=0;
        }
    }

    return minSteps;
}
 
function main() {

    let line1 = processArray(readline());
    let line2 = processArray(readline());

    let n = line1[0];
    let k = line1[1];

    arr = processArray(line2);

    console.log(minSteps(arr, n, k));
}
