/** 
* @param {number[]} input
* @param {number} targetSum
* @param {number[]} currentArray
* @param {number} currentIndex
* @param {number} currentSum
* @param {number[][]} combinationResult
* @return {number[][]}
*/

function findCombinationSumArraysHelper( 
input,
targetSum,
currentArray = [],
currentIndex = 0, 
currentSum = 0,
combinationResult = []){
    if(currentSum > targetSum){
        return combinationResult;
    }

    else if (currentSum === targetSum){
        combinationResult.push(currentArray.slice());
        return combinationResult;
    }

    else{
        for(let index=currentIndex; index<input.length; index++){
            currentArray.push(input[index]);
            currentSum += input[index];
            findCombinationSumArraysHelper(input, targetSum, currentArray, index, currentSum, combinationResult)
            currentSum -= currentArray[currentArray.length -1]; 
            currentArray.pop();
        }
        
        return combinationResult;
        

    }

}

function findCombinationSumArrays(input, target){
    return findCombinationSumArraysHelper(input, target);
}

