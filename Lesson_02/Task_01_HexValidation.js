/*
Taskname:       Hexadecimal Validation
Description:    Tests if given String is HexaDecimal
*/

//DEFINITIONS

Array.prototype.isHexArray = function () {
    this.forEach(element => {
        console.log(element + ": " + element.isHex())
    })
}

String.prototype.isHex = function () {
    let hexAlphabet = [0, "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexChar;

    lbl1:
    for (let i = 1; i < this.length; i++) {
        //hexChar = false;
        let c = this.charAt(i);
        if (typeof c === "string") {
            c = c.toUpperCase();
        }
        else {
            c = c.toString();
            c = c.toUpperCase();
        }
        if (hexAlphabet.indexOf(c) !== -1) {
            continue lbl1;
        }
        return false;
    }
    return true;
}


//MAIN
arr1 = ["ffx5", "gfa5", "ff95", "af75", "339468763afef5", "0a5", "0"];

arr1.isHexArray();

