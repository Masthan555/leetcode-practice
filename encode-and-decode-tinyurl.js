/* Masthan Swamy */

var hashTable = {};

var getHash = (key)=>{
    let str = "";
    while(str.length != 5){
        let c = String.fromCharCode(Math.random()*1000);
        if((c>='a' && c<='z') || (c>='A' && c<='Z') ){
            str = str + c;
        }
    }
    if(hashTable[str]){
        return getHash(key);
    }
} 

var encode = function(longUrl) {
    let hash = getHash(longUrl);
    hashTable[hash] = longUrl;    
    return hash;
};

var decode = function(shortUrl) {
    return(hashTable[shortUrl]);
};

console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));
