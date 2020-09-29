/** 
* @param {string} str1
* @param {string} str2
* @return {number}
*/

/* Levenshtein Distance */


function levenshteinDistance(str1, str2){
    const matrix = Array(str2.length+1).fill(0).map(()=> Array(str1.length+1).fill(0));

    for(let rowIndex = 0; rowIndex <= str2.length; rowIndex++){
        matrix[rowIndex][0] = rowIndex;
    }

    for(let columnIndex = 0; columnIndex <= str1.length; columnIndex++){
        matrix[0][columnIndex] = columnIndex;
    }

    for(let rowIndex = 1; rowIndex <= str2.length; rowIndex++ ){
        for(let columnIndex = 1; columnIndex <= str1.length; columnIndex++){
            if(str1.charAt(columnIndex-1) === str2.charAt(rowIndex-1)){
                matrix[rowIndex][columnIndex] = matrix[rowIndex-1][columnIndex-1];
            }else{
                matrix[rowIndex][columnIndex] = 1 + Math.min(matrix[rowIndex-1][columnIndex-1], Math.min(matrix[rowIndex-1][columnIndex],
                 matrix[rowIndex][columnIndex-1]));
            }
        }
    }

    return matrix[str2.length][str1.length];
}