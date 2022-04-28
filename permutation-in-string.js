/* Masthan Swamy */

doesHashEqual = (obj1, obj2)=>{
    for(let [k, v] of Object.entries(obj1)){
        if(obj2[k] != v){
            return false;
        }
    }
    return true;
}

var checkInclusion = function(s1, s2) {
    let s1Hash = {}, s2Hash = {};
    // create hash of s1
    for(let c of s1){
        if(s1Hash[c]){
            s1Hash[c]++;
        }else{
            s1Hash[c] = 1;
        }
    }  

    // insert first k elements and compare hash tables
    let k = s1.length;
    for(let i=0; i<k-1; i++){
        if(s2Hash[s2[i]]){
            s2Hash[s2[i]]++;
        }else{
            s2Hash[s2[i]] = 1;
        }
    }

    let i=k-1;
    while(i<=s2.length){
        if(s2Hash[s2[i]]){
            s2Hash[s2[i]]++;
        }else{
            s2Hash[s2[i]] = 1;
        }
        if(doesHashEqual(s1Hash, s2Hash)){
            return true;
        }else{
            if(s2Hash[s2[i-k+1]]){
                s2Hash[s2[i-k+1]]--;
            }
            i++;
        }
    }
    return false;
};

let s1 = "abc";
let s2 = "ooeidbaocbsa";
console.log(checkInclusion(s1, s2));