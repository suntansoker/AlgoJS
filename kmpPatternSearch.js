function createPatternTable(pattern){
    let patternTable = Array(pattern.length).fill(0);
    let prefixIndex = 0;
    let suffixIndex = 1;

    while(suffixIndex < pattern.length){
        if(pattern[prefixIndex] === pattern[suffixIndex]){
            patternTable[suffixIndex] = prefixIndex + 1;
            suffixIndex++;
            prefixIndex++;
        }else if(prefixIndex === 0){
            patternTable[suffixIndex] = 0;
            suffixIndex++;
        }else{
            prefixIndex = patternTable[prefixIndex - 1];
        }
    }

    return patternTable;

}


function kmpPatternSearch(text, pattern){
    if(pattern === "")
        return 0;

    let textIndex = 0;
    let patternIndex = 0;

    let patternTable = createPatternTable(pattern);

    while(textIndex < text.length){
        if(text[textIndex] === pattern[patternIndex]){
            if(patternIndex === pattern.length-1){
                return textIndex - pattern.length + 1;
            }
            textIndex++;
            patternIndex++;
        }else if(patternIndex > 0){
            patternIndex = patternTable[patternIndex - 1];   
        }else{
            patternIndex = 0;
            textIndex++
        }
    }

    return -1;
}