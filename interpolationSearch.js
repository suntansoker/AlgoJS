/** 
* @param {number[]} array
* @param {number} searchElement
* @return {number}
*/

function interpolationSearch(array,leftIndex,rightIndex,searchElement){
    if(leftIndex<=rightIndex && array[leftIndex]<= searchElement && searchElement<= array[rightIndex]){
        let position = leftIndex + Math.floor(((searchElement - array[leftIndex]) * (rightIndex - leftIndex)) / (array[rightIndex] - array[leftIndex]));
        if(array[position] === searchElement){
            return position;
        }
        else if (array[position] < searchElement){
            return interpolationSearch(array, position+1, rightIndex, searchElement);
        }
        else{
            return interpolationSearch(array, leftIndex, position -1, searchElement);
        }
    }
    return -1;
}