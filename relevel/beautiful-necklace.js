/* Masthan Swamy */

function getMostBeautifulNecklaceFromMarket(necklaces){
    let mostBeautifulNecklaces = [[0, Number.MIN_VALUE], [0, Number.MIN_VALUE]];

    for(let i=0; i<necklaces.length; i++){
        let beautinessValueOfCurrentNecklace = Math.min(...necklaces[i]);

        if(beautinessValueOfCurrentNecklace > mostBeautifulNecklaces[0][1]){
            mostBeautifulNecklaces[0][0] = i;
            mostBeautifulNecklaces[0][1] = beautinessValueOfCurrentNecklace;
        }else if(beautinessValueOfCurrentNecklace > mostBeautifulNecklaces[1][1]){
            mostBeautifulNecklaces[1][0] = i;
            mostBeautifulNecklaces[1][1] = beautinessValueOfCurrentNecklace;
        }

        // mostBeautifulNecklace = Math.max(mostBeautifulNecklace, beautinessValueOfCurrentNecklace);
    }

    return mostBeautifulNecklaces;
}

let beautifulNecklaceForMyMom = (necklaces)=>{
    let m = necklaces[0].length;
    let mostBeautifulNecklacesInTheMarket = getMostBeautifulNecklaceFromMarket(necklaces);

    let i1 = mostBeautifulNecklacesInTheMarket[0][0];
    let i2 = mostBeautifulNecklacesInTheMarket[1][0];
    // Simply i will buy 2 pieces of this necklace and calclate beautiness then
    let beautinessOfCombinedNecklace = Number.MAX_VALUE;
    for(let i=0; i<m; i++){
        beautinessOfCombinedNecklace = Math.min(beautinessOfCombinedNecklace, Math.max(necklaces[i1][i], necklaces[i2][i]));
    }

    return beautinessOfCombinedNecklace;
}


let necklaces = [
    [2, 1, 8, 9]
    // [1, 4, 3, 8],
    // [1, 1, 6, 2],
    // [3, 9, 9, 6],
    // [1, 7, 2, 7]
];

console.log(beautifulNecklaceForMyMom(necklaces));