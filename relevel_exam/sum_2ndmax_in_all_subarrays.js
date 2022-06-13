let prevGreater = (arr)=>{
    let stack = [];
    let prevGreater = Array(arr.length);
    for(let i=arr.length-1; i>=0; i--){
        let n = stack.length-1;
        while(n>=0 && arr[stack[n]] < arr[i]){
            prevGreater[stack[n]] = i;
            stack.pop();
            n--;
        }
        stack.push(i);
    }
    while(stack.length != 0){
        prevGreater[stack.pop()] = -1;
    }

    return prevGreater;
}

let nextGreater = (arr)=>{
    let stack = [];
    let nextGreater = Array(arr.length);

    for(let i= 0; i<arr.length; i++){
        let n = stack.length-1;

        while(n>=0 && arr[i] > arr[stack[n]]){
            nextGreater[stack[n]] = i;
            stack.pop();
            n--;
        }
        stack.push(i);
    }

    while(stack.length != 0){
        nextGreater[stack.pop()] = arr.length;
    }

    return nextGreater;
}

let nextSmaller = (arr)=>{
    let stack = [];
    let nextSmaller = [];
    
    for(let i=0; i<arr.length; i++){
        let n = stack.length-1;
        while(n>=0 && arr[stack[n]]>=arr[i]){
            nextSmaller[stack[n]] = arr[i];
            stack.pop();
            n--;
        }
        stack.push(i);
    }

    while(stack.length != 0){
        nextSmaller[stack.pop()] = 0;
    }

    return nextSmaller;
}

let prevSmaller = (arr)=>{
    let stack = [];
    let prevSmaller = [];
    
    for(let i=arr.length-1; i>=0; i--){
        let n = stack.length-1;
        while(n>=0 && arr[stack[n]]>=arr[i]){
            prevSmaller[stack[n]] = arr[i];
            stack.pop();
            n--;
        }
        stack.push(i);
    }

    while(stack.length != 0){
        prevSmaller[stack.pop()] = 0;
    }

    return prevSmaller;
}

let sumOfMaxInSubArrays = (arr)=>{
    let prevGreaterIndex = prevGreater(arr);
    let nextGreaterIndex = nextGreater(arr);
    let nextSmallerValues = nextSmaller(arr);
    let prevSmallerValues = prevSmaller(arr);

    console.log(prevSmallerValues);
    console.log(nextSmallerValues);

    let sum = 0;
    for(let i=0; i<arr.length; i++){
        // let totalSubarraysInWhichCurrentElementIsMaximum = (i-prevGreaterIndex[i]) * (nextGreaterIndex[i]-i);
        // console.log(arr[i], totalSubarraysInWhichCurrentElementIsMaximum);
        // sum += totalSubarraysInWhichCurrentElementIsMaximum * Math.max(prevSmallerValues[i], nextSmallerValues[i]);
        sum += ((i-prevGreaterIndex[i]) * prevSmallerValues[i]) + ((nextGreaterIndex[i]-i) * nextSmallerValues[i]);
        console.log(arr[i], ((i-prevGreaterIndex[i]) * prevSmallerValues[i]), ((nextGreaterIndex[i]-i) * nextSmallerValues[i]), sum);
    }

    return [prevGreaterIndex, nextGreaterIndex, sum];
    return sum;
}


let arr = [1, 3, 2];
console.log(sumOfMaxInSubArrays(arr));