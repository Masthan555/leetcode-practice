/* Masthan Swamy */

function isBadVersion(n){
    if(n>3){
        return true;
    }

    return false;
}

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        var firstBadVersion;
        while(start<=end){
            let mid = Math.floor((end-start)/2)+start;
            let check = isBadVersion(mid);
            if(check){
                firstBadVersion = mid;
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        
        return firstBadVersion;
    };
};

console.log(solution(isBadVersion)(5));