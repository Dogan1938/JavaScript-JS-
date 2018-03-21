//DEFINITIONS
Number.prototype.manipulateThis = function (){
    return Math.pow(this, 2);
}

function manipulateParam(num){
    return Math.pow(num,2);
}

function manipulateParamLoop(num){
    return Math.pow(num,2);
}

Array.prototype.manipulateThisLoop = function (){
    for(let i = 0; i < this.length; i++){
        this[i] = Math.pow(this[i], 2);
    }
}



/*
*Print an Array
*/

//Pre define Version

/*function printer(param1){
    console.log(param1)
}
function printArr2(arr, cb(element)){
    arr.forEach(cb(element))
}
*/

//Define in Callback Version 
function printArr(arr){
    arr.forEach(function(element){console.log(element)})
}

//ProcessArray Funktion
function processArray(myArray, cb){
    let retArr = [myArray.length];
    retArr[0] = "-1";

    for(let i = 0; i < myArray.length; i++){
        retArr[i] = cb(myArray[i]);
    }

    return retArr;
}



//MAIN
arr1 = [44,99,2,48,7779,15,24,4,3,7,9,1,2];

printArr(arr1);
let newArr = processArray(arr1, function(a){return Math.pow(a,2)});

console.log("");
console.log("New Array: ");
printArr(newArr);
