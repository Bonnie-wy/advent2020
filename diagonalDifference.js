function diagonalDifference(arr) {
    let numberOne = 0;
    let numberTwo = 0;

  
    for (let i=0; i < arr.length; i++){
        numberOne += arr[i][i];
    }

    for (let i=0; i < arr.length; i++){
        numberTwo += arr[i][arr.length-1 - i];
    }

    return Math.abs(numberOne - numberTwo);
    
}