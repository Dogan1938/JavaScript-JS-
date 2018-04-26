/*
Taskname:       Remove Minimum
Description:    Removes the miminum Number in an array, if inludes(element)
                == true for more than 1 Elements, remove the one with 
                lowest index. if array Empty, return empty array.
                Order of elements are immutable.
*/

//DEFINITIONS
function removeMinimum(arr){
    let min = Number.MAX_SAFE_INTEGER;
    arr.forEach(element => {
        element < min ? min = element : min = min;
    });
    arr.splice(arr.indexOf(min),1);
    return arr;
}

//MAIN
let array1 = [5, 3, 2, 1, 4];
removeMinimum(array1).forEach(element => {console.log(element)});