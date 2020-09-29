/** 
* @param {number[]} inputArray
* @return {number[]} maxSubarray
*/

/* Kadane's Algorithm */

function dpMaxSumSubarray(inputArray) {
    let currentSum = 0;
    let maxSum = -Infinity;
    let maxStartIndex = 0;
    let startIndex = 0;
    let maxEndIndex = inputArray.length - 1;

    for(let index = 0; index < inputArray.length; index++){
        currentSum += inputArray[index];
        if(currentSum > maxSum){
            maxSum = currentSum;
            maxStartIndex = startIndex;
            maxEndIndex = index;
        }

        if(currentSum < 0){
            currentSum = 0;
            startIndex = index + 1; 
        }
    }

    return inputArray.slice(maxStartIndex, maxEndIndex+1);
}