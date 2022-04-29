/* Masthan Swamy */

var mergeIntervals = (intervals, i, j)=>{
    if(j==intervals.length){
        j--;
    }

    let a1 = Math.min(intervals[i][0], intervals[j-1][0]);
    let a2 = Math.max(intervals[i][1], intervals[j-1][1]);

    return [a1, a2];
}

var merge = function(intervals) {
    let i = 0, j=1;
    let res = [];

    intervals.push([0, 0]);    
    let n = intervals.length;
    while(j<n){
        while(j<n && ((intervals[j][0] >= intervals[j-1][0] && intervals[j][0] <= intervals[j-1][1]) || (intervals[j-1][0] >= intervals[j][0] && intervals[j-1][0] <= intervals[j][1]))){
            j++;
        }
        res.push(mergeIntervals(intervals, i, j));
        i=j;
        j++;
    }

    return res;
};

let intervals = [[1,4],[0,5]];
console.log(merge(intervals));