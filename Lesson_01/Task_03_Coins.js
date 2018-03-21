/*
Taskname:       Comibation Of Coins
Description:    Function, which returns 
                an array of coins fitting in one coin
*/



//DEFINITIONS

function coinCombo(cent) {
    let coins = [1, 2, 5, 10, 20, 50];
    let retCoin = [];

    for (let i = coins.length - 1; i >= 0; i--) {
        retCoin[i] = 0;
        while (cent >= coins[i]) {
            cent -= coins[i];
            retCoin[i]++;
        }
    }
    return retCoin;
}

function printArray(arr) {
    arr.forEach(function (element) { console.log(element) })
}


//MAIN
printArray(coinCombo(15));