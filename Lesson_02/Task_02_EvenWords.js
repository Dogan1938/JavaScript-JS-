/*
Taskname:       Even Words
Description:    Tests if words of given String have an even amount of chars. 
                If not, prefixes the last char to it to be even. 
*/

//DEFINITIONS
String.prototype.evenWordsV2 = function () {
    let ret_str = "";
    let tmp_str = "";
    //Remove all unwanted symbols
    tmp_str = this.replace(/\!|\?|\.|\,|\_/gi, "");
    //Add last char to uneven words
    tmp_str.split(" ").forEach(function (element) {
        if (element.length % 2 == 1) {
            ret_str += (element + element.charAt(element.length - 1) + " ")
        } else {
            ret_str += element + " "
        }
    });
    return ret_str.slice(0, ret_str.length - 1);
}





//MAIN
let string1 = "How did we end up here? We go?";

console.log("Function result:");
console.log(string1.evenWordsV2());
console.log("Expected result:");
console.log("Howw didd we endd up here We go");



























//BACKUP
//let regex = /\!|\?|\.|\,|\_/gi;
//let to_exclude = [",", ".", "?", "_", "!"];


//let regex = new RegExp("\!|\?|\.|\,|\_", "gi"); 
//let regex = new RegExp("\\,\.\_\?\!", "gi"); 

//str = str.replace(/\!/gi, "");



/*
String.prototype.isEvenV2 = function(){
    if (this.length % 2 == 0){
        return true;
    }
    return false;
}
*/




/*
console.log("Now the arrow iteration: ");
string1.split(" ").forEach(element => console.log(element));
console.log("");

console.log("Now the callback iteration");
string1.split(" ").forEach(function (element) {
    console.log(element)
});
console.log("");
*/


/*
function evenWordsV1(str) {
    //Remove all unwanted symbols
    str = str.replace(/\!|\?|\.|\,|\_/gi, "");

    //Add chars for uneven words
    let count = 0;
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) != " ") {
            count++;
        }
    }
    return str;
}
*/