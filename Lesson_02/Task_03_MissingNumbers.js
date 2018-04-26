/*
Taskname:       Missing Words
Description:    Gets an array of Numbers with possible gaps. 
                Input is sorted && every Number is smaller than its 
                successor. Function returns array of missing Numbers.
*/

//DEFINITIONS
Array.prototype.getGaps = function(){
    let ret_arr = new Array;
    for(let i = this[0]; i <= this[this.length - 1];i++){
        if(this.includes(i) == false) 
            ret_arr.push(i);
    }
    return ret_arr;
}

let arr1 = [-3,-2, 1, 5];
arr1.getGaps().forEach(element => console.log(element));