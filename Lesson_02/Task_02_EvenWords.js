/*
Taskname:       Even Words
Description:    Tests if words of given String have an even amount of chars. 
                If not, prefixes the last char to it to be even. 
*/

//DEFINITIONS
function evenWords(str) {
    //Remove all unwanted symbols
    str = str.replace(/\!|\?|\.|\,|\_/gi, "");

    //Add chars for even words
    let count = 0;
    for (let i = 1; i < str.length; i++) {
        if (str.charAt(i) != " ") {
            count++;
        }
    }
    
    return str;
}


//MAIN
let string1 = "!lel _4 !?AAa!";
console.log(evenWords(string1));









//BACKUP
    //let regex = /\!|\?|\.|\,|\_/gi;
    //let to_exclude = [",", ".", "?", "_", "!"];

    
    //let regex = new RegExp("\!|\?|\.|\,|\_", "gi"); 
    //let regex = new RegExp("\\,\.\_\?\!", "gi"); 

    //str = str.replace(/\!/gi, "");