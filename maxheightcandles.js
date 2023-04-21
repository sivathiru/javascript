/*You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]

The maximum height candles are  units high. There are  of them, so return 2 .*/
/*function birthdayCakeCandles(arr){
    debugger;
    let max = arr[0];
    let count = {};
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        count.arr[i] = (count.arr[i]||0) + 1;
    }
}*/

function birthdayCakeCandles(arr){
    let max = arr[0];
    let count = {};
    let result;
    arr.forEach(element => {
        if(arr[element]>max){
            max = arr[element];
        }
        count[element] = (count[element]||0)+1;
        for(let item in count){
            if(item == max){
                result = count[item];
            }
        }
    });
    return result;
}

let candles = [1,4,4,3];
birthdayCakeCandles(candles);
