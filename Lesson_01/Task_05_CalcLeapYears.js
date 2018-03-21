/*
Taskname:       Calculation of leap years
Description:    isLeap() calculates if param is leap, 
                isLeapArray() iterates trough all elements & prints.
*/

//DEFINITIONS
function isLeap(num){
    if(num % 4 == 0 || num % 400 == 0){
        return true;
    }
    return false;
}

function isLeapArray(arr){
    arr.forEach(element => {
        console.log(element + ": " + isLeap(element));
    });
}



//MAIN
let arr1 = [2012,1904,2048,1905,1900,2012,2015];
isLeapArray(arr1);