/** 
* @param {number} number1
* @param {number} number2
* @return {number}
*/

function euclideanGCDRecursive(number1, number2){
    let absNum1 = Math.abs(number1);
    let absNum2 = Math.abs(number2);

    return absNum2===0 ? absNum1: euclideanGCDRecursive(absNum2, absNum1 % absNum2);
}

function euclideanGCDIterative(number1, number2){
    let absNum1 = Math.abs(number1);
    let absNum2 = Math.abs(number2);

    while(absNum2!==0){
        let temp = absNum1 % absNum2;
        absNum1 = absNum2;
        absNum2 = temp;
        
    }

    return absNum1;
}