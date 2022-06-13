process.stdin.resume();
process.stdin.setEncoding('utf8');
 
let inputString = '';
let currentLine = 0;
let input = [];
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    input = inputString.trim().split("\n").map(string => {
        return parseInt(string.trim());
    });
    main();
});
 
function removeChar(str, i){
    let n = str.length;
    return str.substring(0,i) + str.substring(i+1, n);
}
 
function maxModValue(n, k){
    let str = "" + n;
    let max = n%k;
    for(let i=0; i<str.length; i++){
        let newN = parseInt(removeChar(str, i));
        max = Math.max(max, newN%k );
    }
 
    return max;
} 
 
function main(){
    let t = input[currentLine++];
 
    for(let i=0; i<t; i++){
        console.log(maxModValue(input[currentLine++], input[currentLine++]));
    }
}

/**
 * len of n = 5
 * len of k = 3
 * 
 * 
 * 
 * 
 */