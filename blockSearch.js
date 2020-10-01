/** 
* @param {Number[]} numArray
* @param {Number} searchElement
* @return {Number}
*/

function blockSearch(numArray, searchElement){
    
    let n = numArray.length
    let rootIndex = Math.floor(Math.sqrt(numArray.length));

    let prev = 0;

    while(numArray[Math.min(n, rootIndex)] < searchElement){
        prev = rootIndex;
        rootIndex += Math.floor(Math.sqrt(numArray.length));

        if(prev > n){
            return -1;
        }
    }

    while(numArray[prev] <= searchElement){
        if(numArray[prev] === searchElement){
            return prev;
        }
        prev++;
    }

    return -1;


}