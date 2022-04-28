/* Masthan Swamy */

var letterCasePermutation = function(s) {
    var set = [];
    
    var transform = (s, i, str = "")=>{
        if(str.length>=s.length){
            set.push(str);
            return;
        }

        if(s[i]>='a' && s[i]<='z'){
            let up = String.fromCharCode(s[i].charCodeAt()-32);
            transform(s, i+1, str+up);
        }else if(s[i]>='A' && s[i]<='Z'){
            let down = String.fromCharCode(s[i].charCodeAt()+32);
            transform(s, i+1, str+down);
        }
        transform(s, i+1, str+s[i]);
    }

    transform(s, 0);

    return set;
};

let str = "a1b2";
console.log(letterCasePermutation(str));