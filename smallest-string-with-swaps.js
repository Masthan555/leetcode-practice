/* Masthan Swamy */

var constructAllPossibleStrings = (s, start, connections, res)=>{
    if(s.join("") < res[0]){
        res[0] = s.join("");
        return;
    }

    for(let i=start; i<s.length; i++){
        let arr = connections[i];
        if(arr){
            for(let j=0; j<arr.length; j++){
                let temp = s[i];
                s[i] = s[arr[j]];
                s[arr[j]] = temp;
                constructAllPossibleStrings(s, start+1, connections, res);
                temp = s[i];
                s[i] = s[arr[j]];
                s[arr[j]] = temp;
            }
        }
    }
}
var smallestStringWithSwaps = function(s, pairs) {
    let connections = {};
    for(let i=0; i<pairs.length; i++){
        if(connections[pairs[i][0]]){
            connections[pairs[i][0]].push(pairs[i][1]);
        }else{
            connections[pairs[i][0]] = [pairs[i][1]];
        }
        if(connections[pairs[i][1]]){
            connections[pairs[i][1]].push(pairs[i][0]);
        }else{
            connections[pairs[i][1]] = [pairs[i][0]];
        }
    }

    console.log(connections);
    let res = [s];
    constructAllPossibleStrings(s.split(""), 0, connections, res);
    console.log(res);
};

let s = "dcewjnkfab";
let pairs = [[0,3],[1,2],[0,2]];

smallestStringWithSwaps(s, pairs);