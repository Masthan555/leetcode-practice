/* Masthan Swamy */

var twoSum = function(numbers, target) {
    let n = numbers.length;
    let i=0, j=n-1;

    while(i<j){
        let sum = numbers[i] + numbers[j];
        if(sum == target){
            return [i+1, j+1];
        }else if(sum>target){
            j--;
        }else{
            i++;
        }
    }
};

let numbers = [-1,0];
let target = -1;
console.log(twoSum(numbers, target));