/*
Taskname:       Square Numbers
Description:    Tests if all Numbers in an given Array are Square Numbers. 
                (ret true/false) if square || !Square; ret undefined if array = [];.
*/

//DEFINITIONS
Array.prototype.isSquare = function () {
    if (this.length == 0) {
        return undefined;
    }
    for (let i = 0; i < this.length; i++) {
        if (Number.isInteger(Math.log2(this[i])) === false) {
            return false;
        }
    }
    return true;
}

//MAIN
arr1 = [1, 2, 4, 16, 32, 128];
arr2 = [64, 32, 128, 4096];
arr3 = [64, 17, 3, 64];
arr4 = [];

console.log(arr1.isSquare());
console.log(arr2.isSquare());
console.log(arr3.isSquare());
console.log(arr4.isSquare());
