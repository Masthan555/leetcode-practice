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

function isPalindromme(str){
    let n = str.length-1;
    for(let i=0; i<n/2; i++){
        if(str[i] != str[n-i]){
            return false;
        }
    }
    return true;
}

function combinations(arr, res){
    if(res.length == arr.length){
        let str = res.join("");
        let check = isPalindromme(str);
        if(check){
            return 1;
        }else{
            return 0;
        }
    }
    if(res.length > arr.length){
        return 0;
    }

    let check = 0;
    for(let i=0; i<arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i]);
            check = combinations(arr, res);
            if(check == 1){
                break;
            }
            res.pop();
        }
    }
    return check;
}
 
function main() {

    // let line1 = processArray(readline());
    // let t = line1[0];
    // let m = line1[1];


    // let arr = [];
    // while(t > 0) {
    //     arr.push(readline());
    //     t = t - 1;
    // }

    let arr = ["abba", "cccc"];

    console.log(combinations(arr, []));
}

main();