'use strict';

// let product = ['egg', 'rice', 'çheese', 'corn'];
// let productPrice = [3.44, 4.66, 5.55, 3.55, 6.44];
// let saleProduct = ['egg', 'cheese'];
// let saleProductPr1ice = [4.44, 2.33];
    
function calculateDiagonals(matrix) {
// debugger;
    let n = matrix.length;
    let dia1 = 0;
    let dia2 = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j){
                dia1 += matrix[i][j];
            }
            if(i + j === n - 1){
                dia2 += matrix[i][j];
            }
        }
    }
    return Math.abs(dia1 - dia2);
}

let matrix = [
    [2, 3, 4],
    [5, 3, -1], 
    [9, 8, -2]
];
calculateDiagonals(matrix)


//collection
