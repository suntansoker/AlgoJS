/** 
* @param{number[]} sequence
* @return{number} longestLength
*/
function LIS(sequence){
    const lengthsArray = Array(sequence.length).fill(1);

    let prevElementIndex = 0;
    let currentElementIndex = 1;

    while(currentElementIndex < sequence.length){
        if(sequence[prevElementIndex] < sequence[currentElementIndex]){
            const newLength = lengthsArray[prevElementIndex] + 1;
            if(newLength > lengthsArray[currentElementIndex]){
                lengthsArray[currentElementIndex] = newLength;
            }
        }
        prevElementIndex += 1;
        if(prevElementIndex === currentElementIndex){
            currentElementIndex += 1;
            prevElementIndex = 0;
        }
    }

    let longestLength = 1;
    for(let index = 1;index< sequence.length; index++){
        if(lengthsArray[index] > longestLength){
            longestLength = lengthsArray[index];
        }
    }

    return longestLength;
}