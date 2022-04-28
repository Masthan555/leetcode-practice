/*  Masthan Swamy */

var combine = function(n, k) {
    var res = [];
    var track = [];

    let backtrack = (n, k, start)=>{
        if(track.length == k){
            res.push(track.slice());
            return;
        }

        for(let i=start; i<=n; i++){
            track.push(i);
            backtrack(n, k, i+1);
            track.pop();
        }
    }

    backtrack(n, k, 1);

    return res;
};

let n = 4;
let k = 2;
console.log(combine(n, k));