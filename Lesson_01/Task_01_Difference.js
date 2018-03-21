//Aufgabe 1

//Functions
Array.prototype.getHighestDiffOfThis = function () {
    let max = 0;
    let max_str = "";
    for (let i = 0; i < this.length; i++) {
        //console.log(this[i]);
        let a = this[i].split("-")[0];
        let b = this[i].split("-")[1];
        let c = 0;
        if (a > b)
            c = a - b;
        else
            c = b - a;
        if (c > max) {
            max = c;
            max_str = this[i];
        }
    }
    if (max = 0)
        return false;
    return max_str;
}

//MAIN
let array1 = ["1-32", "5-540", "17-4", "333-332", "444-412", "10-545"];

console.log("Array1 length = " + array1.length);
console.log("Highest diff of Array1 is: " + array1.getHighestDiffOfThis());




