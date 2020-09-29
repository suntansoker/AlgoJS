/** 
 * @param {string} str1
 * @param {string} str2
 * @return {number}
*/
function hammingDistance(str1, str2){
    if(str1.length != str2.length){
        throw new Error("Strings are not of the same length");
    }

    let distance = 0;
    for(let index = 0; index < str1.length; index++){
        if(str1[index] !== str2[index]){
            distance++;
        }
    }

    return distance;
}