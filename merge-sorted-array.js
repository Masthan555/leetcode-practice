/* Masthan Swamy */

/*
var merge = function(nums1, m, nums2, n) {
    let result = [];

    let i1=0, i2=0;
    while(i1<m && i2<n){
        if(nums1[i1]<nums2[i2]){
            result.push(nums1[i1]);
            i1++;
        }else{
            result.push(nums2[i2]);
            i2++;
        }
    }
    while(i1<m){
        result.push(nums1[i1]);
        i1++;
    }
    while(i2<n){
        result.push(nums2[i2]);
        i2++;
    }

    for(let i=0; i<result.length; i++){
        nums1[i] = result[i];
    }
    return nums1;
};
*/

var merge = function(nums1, m, nums2, n) {
    let i1=m-1, i2=n-1;
    for(let i=m+n-1; i>=0; i--){

        if( i1>=0 && nums1[i1]>=nums2[i2]){
            nums1[i] = nums1[i1];
            i1--;
        }else if(nums1[i1]==undefined || (i2>=0 && (nums1[i1]<nums2[i2]))){
            nums1[i] = nums2[i2];
            i2--;
        }
    }
    return nums1;
};

let nums1 = [-1,0,0,3,3,3,0,0,0];
let nums2 = [1,2,2];
let m = 6;
let n = 3;
console.log(merge(nums1, m, nums2, n));