/* Masthan Swamy */

var getMinimumDistanceNonVisitedNode = (minimumDistance, visited)=>{
    let minIndex = -1, minValue = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<minimumDistance.length; i++){
        if(visited[i] == true)  continue;

        if(minimumDistance[i] < minValue){
            minValue = minimumDistance[i];
            minIndex = i;
        }
    }

    return [minIndex, minValue];
}

var getManhattanDistance = (p1, p2)=>{
    return Math.abs((p1[0]-p2[0])) + Math.abs((p1[1]-p2[1]));
}

var minCostConnectPoints = function(points) {
    let sum = 0;
    
    let minimumDistance = new Array(points.length).fill(Number.MAX_SAFE_INTEGER);
    let visited = new Array(points.length).fill(false);

    // Set First Point to be visited as 0 length (Starting Point)
    minimumDistance[0] = 0;
    
    for(let i=0; i<points.length; i++){

        let [usingIndex, cost] = getMinimumDistanceNonVisitedNode(minimumDistance, visited);

        sum = sum + cost;
        visited[usingIndex] = true;
        
        for(let j=0; j<points.length; j++){
            if(visited[j] == true){
                continue;
            }

            // Get Manhattan Distance between currently usingNode and remaining Nodes
            let manhattanCost = getManhattanDistance(points[usingIndex], points[j]);
            minimumDistance[j] = Math.min(manhattanCost, minimumDistance[j])
        }
    }

    return sum;
};

let points = [[0,0],[2,2],[3,10],[5,2],[7,0]];
console.log(minCostConnectPoints(points));