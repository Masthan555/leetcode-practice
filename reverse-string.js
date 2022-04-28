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

var reverseString = function(s) {
    let i=0, j=s.length-1;

    while(i<j){
        swap(s, i, j);
        i++;
        j--;
    }
};

let s = ["H","a","n","n","a","h"];
reverseString(s);
console.log(s);