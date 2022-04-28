/* Masthan Swamy */

var isValid = function(s) {
    let stack = [];
    for(let c of s){
        if(c == '(' || c == '[' || c == '{'){
            stack.push(c);
        }else{
            let n = stack.length-1;
            if(n < 0) return false;
            switch(c){
                case ')': if(stack[n] == '(') stack.pop();
                          else return false;   break;
                case ']': if(stack[n] == '[') stack.pop(); 
                          else return false;   break;
                case '}': if(stack[n] == '{') stack.pop();
                          else return false;   break;
            }
        }
    }

    return (stack.length == 0);
};

let s = "(]";
console.log(isValid(s));