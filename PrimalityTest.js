/** 
 * @param {number} num
 * @return {boolean}
*/

function primalityTest(num){
    if(num===undefined) return false;
    if(num<=3)
        return num>1
    else if(num % 2 ==0 || num % 3 == 0)
        return false;

    let i=5;
    const upperBound = Math.sqrt(num);

    while(i*i<=upperBound){

        if(num%i==0 || num % (i+2)==0){
            return false;
        }
        i=i+6;
    }
    return true;
}