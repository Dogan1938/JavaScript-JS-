/*
Taskname:       Even Words
Description:    Tests if words of given String have an even amount of chars. 
                If not, prefixes the last char to it to be even. 
*/

//DEFINITIONS
function evenWords(str) {
    let to_exclude = [",", ".", "?", "_", "!"];

    let regex = new RegExp("\\!|\?|\.|\,|\_", "gi"); 
    //let regex = new RegExp("\\,\.\_\?\!", "gi"); 

    //str = str.replace(/\!/gi, "");
    str = str.replace(regex, "");


    //Round 1: remove all unwanted symbols
    for (let i = 1; i < str.length; i++) {
        if (to_exclude.indexOf(str.charAt(i)) != -1) {


            //str = str.charAt(i).replace()
            //i--;
        }
    }
    return str;
}


//MAIN
let string1 = "!lel _4 !?AAa!";
console.log(evenWords(string1));