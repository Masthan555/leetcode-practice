/* Masthan Swamy */

var isBalanced = (str)=>{
    let p1 = 0, p2 = 0;
    for(let c of str){
        if(c == "1"){
            p1++;
        }else{
            p2++;
        }
    }

    return( p1 == p2 );
}

var calculateSets = (w, start, str, arr)=>{
    if(str && isBalanced(str)){
        arr.push(str);
    }
    if(str.length>=w.length){
        return;
    }

    // for(let i = start; i<w.length; i++){
        calculateSets(w, start+1, str+w[start], arr);
    // }
}

var balancedPerformance = (w)=>{
    let arr = [];
    for(let i=0; i<w.length; i++){
        calculateSets(w, i, "", arr);
    }

    return arr;
}

let w = [1,2,2,1,2];
console.log(balancedPerformance(w));