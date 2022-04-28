/* Masthan Swamy */

var isAnagram = function(s, t) {
    let ransom = new Array(26).fill(0);
  for(let c of t){
      ransom[c.charCodeAt()-97]++;
  }  

  for(let i in s){
      ransom[s.charCodeAt(i)-97]--;
  }

  // Now check if ransomNote Array is empty
  // console.log(ransom);
  for(let i=0; i<ransom.length; i++){
      if(ransom[i] != 0){
          return false;
      }
  }

  return true;  
};