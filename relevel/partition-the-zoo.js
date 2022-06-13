/* Masthan Swamy */


function fillLetters(animals){
    let obj = {};

    for(let i=97; i<123; i++){
        obj[String.fromCharCode(i)] = [];
    }

    for(let i in animals){
        obj[animals[i]].push(i);
    }

    return obj;
}

function partitionZoo(n, animals){
    
    let obj = fillLetters(animals);
    
    let max = 0;
    let tempMax = 0;
    let left = "";
    for(let i=0; i<animals.length; i++){

        // check if we are moving common element of right and left part to the left side, and any more elements are present in right part
        if(left.includes(animals[i])){
            // check if element similar to animals[i] exists in right part
            let moreExistOnRight = false;
            obj[animals[i]].map((item)=>{
                if(item>i){
                    moreExistOnRight = true;
                }
            });
            if(!moreExistOnRight){
                tempMax--;
                max = Math.max(max, tempMax);
            }
        }else{
            // check if this animals[i] exists in right part of the array
            let existsInRight = false;
            obj[animals[i]].map((item)=>{
                if(item > i){
                    existsInRight = true;
                }
            });

            if(existsInRight){
                left = left + animals[i];
                tempMax++;
            }
            max = Math.max(max, tempMax);
        }
    }

    return [max, tempMax];
}


let n = 6;
let animals = "zzttcz";
console.log(partitionZoo(n, animals));

// console.log(getAlphabetIndex('a'));