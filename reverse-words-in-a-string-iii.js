/* Masthan Swamy */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function swap(s, i, j){
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
}

var reverseString = function(s, i, j) {
    while(i<j){
        swap(s, i, j);
        i++;
        j--;
    }
};

var reverseWords = function(s) {
    s = s.split("");
    s.push(" ");
    let i=0, j=1;
    let n = s.length;

    while(j<n){
        while(s[j] != ' ' && j<n){
            j++;
        }
        if(j<n){
            reverseString(s, i, j-1);
            i = j+1;
            j = i+1;
        }
    }

    return s.join("").trim();
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));