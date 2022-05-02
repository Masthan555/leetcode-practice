/* Masthan Swamy */

function alienLanguage(lang, arr){
    const langMap = {};
    const numArr = [];
    const unsortedObj = {};
    const sortedArr = [];

    lang.split("").map((item, index) => {
        langMap[item] = index + 1;
    });

    arr.map( item => {
        let num = "";

        item.split("").map( letr => num += langMap[letr] );
        numArr.push(Number(num));
        unsortedObj[Number(num)] = item;
    });

    // Now just sort the number array and map back the numbers to words
    numArr.sort((a, b) => a-b );

    numArr.map( number => {
        sortedArr.push(unsortedObj[number]);
    });

    return sortedArr;
}

let lang = "bacdefghijklmnopqrstuvwzyx";
let Q = ["bb","yb","za"];
console.log(alienLanguage(lang, Q));