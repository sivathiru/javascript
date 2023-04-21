/*Given five positive integers, find the minimum and maximum values that 
can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values 
as a single line of two space - separated long integers.

    Example
arr = [1, 3, 5, 7, 9];
The minimum sum is 1 + 3 + 5 + 7 = 16 
and the maximum sum is 3 + 5 + 7 + 9=24. The function prints*/

function miniMaxSum(arr){
    
    let minVal = arr[0];
    let maxVal = 0;
    let totalSum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxVal){
            maxVal = arr[i];
        }
        if(arr[i]<minVal){
            minVal = arr[i];
        }
        totalSum = totalSum + arr[i];
    }
    let minSum = totalSum - maxVal;
    let maxSum = totalSum - minVal;
    console.log(minSum, maxSum);
}

let arr = [1,3,5,7,9];
miniMaxSum(arr);
