/** 
* @param{number[]} weights
* @param{number[]} values
* @param{number} maxWeight
* @return{number}
*/

function Knapsack01(weights, values, maxWeight){
    const maxValueMatrix = Array(weights.length+1).fill(0).map(()=> Array(maxWeight+1).fill(0));

    for(let rowIndex=1;rowIndex <= weights.length;rowIndex++){
        for(let columnIndex=1; columnIndex <= maxWeight; columnIndex++){
            if(columnIndex < weights[rowIndex-1]){
                maxValueMatrix[rowIndex][columnIndex] = maxValueMatrix[rowIndex-1][columnIndex];
            }else{
                let value = maxValueMatrix[rowIndex-1][columnIndex-weights[rowIndex-1]]+values[rowIndex-1];
                maxValueMatrix[rowIndex][columnIndex] = Math.max(value, maxValueMatrix[rowIndex-1][columnIndex]);
            }
        }
    }

    return maxValueMatrix[weights.length][maxWeight];
}

function UnboundedKnapsack(weights, values, maxWeight){
    let dpArray = Array(maxWeight+1).fill(0);
    for(let i=0; i<=maxWeight; i++){
        for(let j=0; j<values.length; j++){
            if(weights[j]<=i){
                dpArray[i]=Math.max(dpArray[i],dpArray[i-weights[j]]+values[j]);
            }
        }
    }
    return dpArray[maxWeight];
}