/** 
* @param{string} string1
* @param{string} string2
* @return{string[]} result
*/
function findLCS(string1, string2) {
    const arr1 = [...string1];
    const arr2 = [...string2];
    
    let matrix = [...Array(arr1.length +1)].fill(0).map(() => Array(arr2.length+1).fill(0));

    for(let rowIndex=1; rowIndex<=arr1.length; rowIndex++){
        for(let columnIndex=1; columnIndex<=arr2.length; columnIndex++){
            if(arr1[rowIndex-1] === arr2[columnIndex-1]) {
                matrix[rowIndex][columnIndex] = 1+matrix[rowIndex-1][columnIndex-1];
            }else{
                matrix[rowIndex][columnIndex] = Math.max(matrix[rowIndex-1][columnIndex],matrix[rowIndex][columnIndex-1]);
            }

        }
    }

    if(matrix[arr1.length][arr2.index]===0)
        return [""];

    let result = [];
    let rowIndex = arr1.length;
    let columnIndex = arr2.length;

    while(rowIndex > 0 && columnIndex > 0){
        if(arr1[rowIndex-1] === arr2[columnIndex-1]){
            result.unshift(arr1[rowIndex-1]);
            rowIndex--;
            columnIndex--;
        }else if(matrix[rowIndex-1][columnIndex] === matrix[rowIndex][columnIndex]){
            rowIndex--;
        }
        else{
            columnIndex--;
        }
            
    }
    return result;
    
    

}