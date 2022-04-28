/* Masthan Swamy */

var permute = function(nums) {
    let res = [];
    let track = [];
    
    let backtrack = ()=>{
        if(track.length == nums.length){
            res.push(track.slice());
            return;
        }

        for(let i=0; i<nums.length; i++){
            if(track.includes(nums[i])) continue;
            
            track.push(nums[i]);
            backtrack();
            track.pop();
        }  
    }

    backtrack();

    return res;
};

let nums = [1, 2, 3];
console.log(permute(nums));
