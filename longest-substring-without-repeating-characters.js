/* Masthan Swamy */

/**
 * Time Complexity: O(s)
 * Space Complexity: O(1), As in worst case hashtable contains atmost 26 characters and not more than that
 */

var lengthOfLongestSubstring = function(s) {
    let memory = {};
    let i=0, j=0;
    let max = 0;
    let counter = 0;
    while(j<s.length){
        if(memory[s[j]]){
            max = Math.max(max, counter);
            while(s[i] != s[j]){
                memory[s[i]] = false;
                i++;
                counter--;
            }
            i++;
            counter--;
        }else{
            memory[s[j]] = true;
        }
        counter++;
        j++;
    }
    max = Math.max(max, counter);

    return max;
};

let s = "abc";
console.log(lengthOfLongestSubstring(s));