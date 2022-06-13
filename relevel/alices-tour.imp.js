/* Masthan Swamy */

/*
 * Scroll down for efficient approach, wih time complexity O(sqrt(n))
function findMinimumSteps(i, j, n, visited){
    if(i<=0 || j<=0) return Number.MAX_VALUE;
    if(i*j > n) return Number.MAX_VALUE;
    if(visited[i][j]) return Number.MAX_VALUE;
    if(i*j == n) return 0;

    visited[i][j] = true;

    let top = findMinimumSteps(i-1, j, n, visited);
    let right = findMinimumSteps(i, j+1, n, visited);
    let down = findMinimumSteps(i+1, j, n, visited);
    let left = findMinimumSteps(i, j-1, n, visited);

    visited[i][j] = false;

    return (1 + Math.min(top, right, down, left));
}

let alice_tour = (n)=>{
    let visited = Array.from({length: n+1}, ()=> Array.from({length: n+1}).fill(false) );

    return 2 + findMinimumSteps(1, 1, n, visited);
}
*/

let alice_tour = (n)=>{
    let minMoves = Infinity;

    for(let i=parseInt(Math.sqrt(n)); i>=1; i--){
        if(n%i == 0){
            let j = n/i;

            minMoves = i+j;
            break;
        }
    }

    return minMoves;
}

let n = 12;

console.log(alice_tour(n));