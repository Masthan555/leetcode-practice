/* Masthan Swamy */

var maxArea = function(height) {

    let i=0, j=height.length-1;

    let max = Number.MIN_SAFE_INTEGER;
    while(i<j){
        let calc = (j-i)*Math.min(height[i], height[j]);
        max = Math.max(max, calc);

        height[i]<height[j]?i++:j--;
    }

    return max;
};

let height = [1,1];
console.log(maxArea(height));