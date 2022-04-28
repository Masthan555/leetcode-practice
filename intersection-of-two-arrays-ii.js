/* Masthan Swamy */

var intersect = function(nums1, nums2) {
    let set1 = {};
    
    for(let i of nums1){
        if(set1[i]){
            set1[i]++;
        }else{
            set1[i] = 1;
        }
    }

    // Now iterate through 2nd set and find intersection with hashtable and store it in "res" set
    let res = [];
    for(let i of nums2){
        if(set1[i] && set1[i]>0){
            res.push(i);
            set1[i]--;
        }
    }

    return res;
};

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));