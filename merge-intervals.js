/* Masthan Swamy */

// var mergeIntervals = (intervals, i, j)=>{
//     if(j==intervals.length){
//         j--;
//     }

//     let a1 = Math.min(intervals[i][0], intervals[j-1][0]);
//     let a2 = Math.max(intervals[i][1], intervals[j-1][1]);

//     return [a1, a2];
// }

var mergeIntervals = (arr1, arr2)=>{
    let a1 = Math.min(arr1[0], arr2[0]);
    let a2 = Math.max(arr1[1], arr2[1]);

    return [a1, a2];
}

var merge = function(intervals) {
    let i=0, j=1;   
    let n = intervals.length;
    let res = [];

    // sort intervals array
    intervals.sort((a,b)=>{ return a[0]-b[0] });

    while(i<n){
        let temp = intervals[i];

        while(j<n && ((temp[0] >= intervals[j][0] && temp[0] <= intervals[j][1]) ||  (intervals[j][0] >= temp[0] && intervals[j][0] <= temp[1]))){
            temp = mergeIntervals(temp, intervals[j]);
            j++;
        }
        i=j;
        j++;

        res.push(temp);
    }

    return res;
};

let intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]];
console.log(merge(intervals));