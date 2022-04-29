/* Masthan Swamy */

var intervalIntersection = function(firstList, secondList) {

    let a = 0;
    let b = 0;

    let res = [];

    while(a<firstList.length && b<secondList.length){
        let temp = [];

        temp[0] = Math.max(firstList[a][0], secondList[b][0]);
        temp[1] = Math.min(firstList[a][1], secondList[b][1]);

        if(firstList[a][1] == temp[1])
            a++;
        else if(secondList[b][1] == temp[1])
            b++;

        if(temp[1] >= temp[0])
            res.push(temp);
    }

    return res;
};

let firstList = [[0,2],[5,10],[13,23],[24,25]];
let secondList = [[1,5],[8,12],[15,24],[25,26]];
console.log(intervalIntersection(firstList, secondList));