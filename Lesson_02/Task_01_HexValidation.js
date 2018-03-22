/*
Taskname:       Hexadecimal Validation
Description:    
*/

//DEFINITIONS

String.prototype.isHex = function () {
    let hexAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexChar;

    for(let i = 1;i<= this.length;i++){
        hexChar = false;
        if(hexAlphabet.find(this[i]) !== undefined){
            break;
        }
    }
}