/* Masthan Swamy */

var correctString = (str)=>{
    let n = str.length-1;

    let res = "";
    let backspaceCount = 0;
    for(let i=n; i>=0; i--){
        if(str[i] == "#"){
            backspaceCount++;
            continue;
        }
        if(backspaceCount > 0){
            backspaceCount--;
            continue;
        }

        res = str[i] + res;
    }   

    return res;
}

var backspaceCompare = function(s, t) {
    return correctString(s) == correctString(t);
};

let s = "ab##";
let t = "c#d#d";

console.log(backspaceCompare(s, t));