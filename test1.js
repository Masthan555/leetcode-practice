let arr = [1,2,2,1,2]
let count = 0;
let mp = new Map();
mp.set(0,1);
let ans = 0;
for(let i = 0;i < arr.length;i++){
    if(arr[i] === 1){
        count++;
    }
    else count--;
    if(mp.has(count)){
        ans += mp.get(count);
        mp.set(count,mp.get(count) + 1);
    }
    else mp.set(count,1);
}

console.log(ans);