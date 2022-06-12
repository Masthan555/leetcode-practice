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

function isValidPermutation(arr){
    let hash = new Set();

    let maxEle = 0;

    for(let i=0; i<arr.length; i++){
        hash.add(arr[i]);

        maxEle = Math.max(maxEle, arr[i]);
    }

    if(maxEle != arr.length || arr.length == 0){
        return false;
    }

    if(hash.size == arr.length){
        return true;
    }

    return false;
}

function combinations(arr, res, count, start){
    if(res.length > arr.length){
        return 0;
    }
    
    if(isValidPermutation(res)){
        console.log(res);
        count[0]++;
    }
    res.push(arr[start]);
    combinations(arr, res, count, start+1);
}
 
function main() {
    // to be modified based on question
    // let t = Number(readline()); // 1
    let t = 1;
    while(t > 0) {
        // let n = Number(readline());
        // let arr = readline();
        // arr = processArray(arr);
        
        let arr = [2, 3, 1];
        // our logic comes here
        let count = [0];

        for(let i=0; i<arr.length; i++){
            combinations(arr, [], count, i);
        }

        // combinations(arr, [], count, 0);
        console.log(count[0]);

        t = t - 1;
    }
}

main();