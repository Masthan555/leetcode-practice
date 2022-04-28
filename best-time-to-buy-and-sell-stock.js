/* Masthan Swamy */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var maxProfit = function(prices) {
    
    let n = prices.length; 

    // Create Max array from end of the array  
    let maxAtI = [];
    maxAtI[n-1] = prices[n-1];
    for(let i=n-2; i>=0; i--){
        maxAtI[i] = Math.max(prices[i], maxAtI[i+1]);
    }

    let max = 0;
    for(let i=0; i<n; i++){
        max = Math.max(max, maxAtI[i]-prices[i]);
    }

    return max;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var maxProfit2 = function(prices){
    let minUptil = Number.MAX_SAFE_INTEGER;
    let max = 0;

    for(let i=0; i<prices.length; i++){
        if(prices[i]<minUptil){
            minUptil = prices[i];
        }
        max = Math.max(max, prices[i]-minUptil);
    }

    return max;
}

let prices = [7,1,5,3,6,4];
console.log(maxProfit2(prices));