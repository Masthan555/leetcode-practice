/* Masthan Swamy */

var containsDuplicate = function(nums) {
    let pos = [], neg = [];
    
    for(let i of nums){
        if(i>=0){
            if(pos[i]){
                return true;
            }else{
                pos[i] = true;
            }
        }else{
            let temp = i * -1;
            if(neg[temp]){
                return true;
            }else{
                neg[temp] = true;
            }
        }
    }
    return false;
};


let nums = [1,5,-2,-4,0];
console.log(containsDuplicate(nums));