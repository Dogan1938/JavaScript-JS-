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




function printArr(arr){
    arr.forEach(function(element){console.log(element)})
}






//TEIL
function processArray(myArray, cb){
    let retArr = [myArray.length];
    retArr[0] = "-1";

    for(let i = 0; i < myArray.length; i++){
        retArr[i] = cb(myArray[i]);
    }

    return retArr;


    //myArray.forEach(function(element){this = cb(element)});
    
    // myArray.forEach(function(num){
    //     return num.manipulate();
    // });
}



//MAIN
arr1 = [44,99,2,48,7779,15,24,4,3,7,9,1,2];

printArr(arr1);
let newArr = processArray(arr1, function(a){return Math.pow(a,2)});
console.log("");
console.log("New Array: ");
printArr(newArr);
