/* Masthan Swamy */

var canConstruct = function(ransomNote, magazine) {
    let ransom = new Array(26).fill(0);
    for(let c of ransomNote){
        ransom[c.charCodeAt()-97]++;
    }  

    for(let i in magazine){
        if(ransom[magazine.charCodeAt(i)-97]>0){
            ransom[magazine.charCodeAt(i)-97]--;
        }
    }

    // Now check if ransomNote Array is empty
    // console.log(ransom);
    for(let i=0; i<ransom.length; i++){
        if(ransom[i]>0){
            return false;
        }
    }

    return true;
};

let ransomNote = "daa";
let magazine = "aab";
console.log(canConstruct(ransomNote, magazine));