/** 
* @param {String[]} str1
* @param {String[]} str2
* @return {String}
*/

function longestCommonSubstring(str1, str2){
    let substringMatrix = Array(str1.length+1).fill(0).map(() => Array(str2.length+1).fill(0));
    for(let rowIndex = 1; rowIndex <= str1.length; rowIndex++){
        for(let columnIndex = 1; columnIndex <= str2.length; columnIndex++){
            if(str1[rowIndex-1] === str2[columnIndex-1]){
                substringMatrix[rowIndex][columnIndex] = 1 + substringMatrix[rowIndex-1][columnIndex-1];
            }
            else{
                substringMatrix[rowIndex][columnIndex] = 0;
            }
        }
    }


    if(str1 === "" || str2 === "")
        return "";


    let longestString = "";
    let rowIndex = str1.length;
    let columnIndex = str2.length;
    let max=0;
    let maxRowIndex = 0;
    let maxColumnIndex = 0;

    for(let i=1; i<=rowIndex; i++){
        for(let j=1; j<=columnIndex; j++){
            if(substringMatrix[i][j] > max){
                max = substringMatrix[i][j];
                maxRowIndex = i;
                maxColumnIndex = j;
            }
        }
    }

    while(substringMatrix[maxRowIndex][maxColumnIndex] > 0){
        longestString = str1[maxRowIndex-1] + longestString;
        maxRowIndex --;
        maxColumnIndex --;
    }

    return longestString;
}


