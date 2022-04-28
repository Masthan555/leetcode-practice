/* Masthan Swamy */

/**
 * Using Recursion
 */
/*
var fillScreen = (image, sr, sc, newColor, oldColor, visited)=>{
    if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;
    if(image[sr][sc] != oldColor) return;
    if(visited[sr][sc] == true) return;

    image[sr][sc] = newColor;
    visited[sr][sc] = true;

    fillScreen(image, sr-1, sc, newColor, oldColor, visited);   // Check recursively from North
    fillScreen(image, sr, sc+1, newColor, oldColor, visited);   // Check recursively from East
    fillScreen(image, sr+1, sc, newColor, oldColor, visited);   // Check recursively from South
    fillScreen(image, sr, sc-1, newColor, oldColor, visited);   // Check recursively from West

    return image;
}

var floodFill = function(image, sr, sc, newColor) {
    let visited = new Array(image.length);
    for(let i=0; i<visited.length; i++){
        visited[i] = new Array(image[0].length).fill(false);
    }

    return fillScreen(image, sr, sc, newColor, image[sr][sc], visited);
};
*/


/**
 * Using BFS
 */
 var floodFill = function(image, sr, sc, newColor) {
    let visited = new Array(image.length);
    for(let i=0; i<visited.length; i++){
        visited[i] = new Array(image[0].length).fill(false);
    }

    let queue = [[sr, sc]];
    let oldColor = image[sr][sc];
    let m = image.length;
    let n = image[0].length;
    while(queue.length != 0){
        let [x, y] = queue.shift();
        
        if(x<0 || y<0 || x>=m || y>=n) continue;
        if(image[x][y] != oldColor) continue;
        if(visited[x][y])   continue;

        image[x][y] = newColor;
        visited[x][y] = true;

        queue.push([x-1, y]); // Enque top element
        queue.push([x, y+1]); // Enque right element
        queue.push([x+1, y]); // Enque down element
        queue.push([x, y-1]); // Enque left element
    }

    console.log(image);
};

let image = [[1,1,1],[1,1,0],[1,0,1]];
let sr = 1, sc = 1;
let newColor = 2;
// console.log(floodFill(image, sr, sc, newColor));     // recursion
console.log(floodFill(image, sr, sc, newColor));  // BFS