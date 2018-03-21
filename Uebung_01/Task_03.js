//Taskname: Comibation Of Coins

//DEFINITIONS

function coinCombo(cent){
    let coins = [1, 2, 5, 10, 20, 50];
    let retCoin = [];

    for(let i = coins.length - 1; i >= 0; i--){
        while((cent % coins[i]) > coins[i]){
            cent %= coins[i];
            retCoin[i]++;
        }
        if (retCoin[i] === undefined){
            retCoin[i] = 0;
        }
    }
    return retCoin;
}

function printArray(arr){
    arr.forEach(function(element){console.log(element)})
}


//MAIN
printArray(coinCombo(15));
console.log(44);

