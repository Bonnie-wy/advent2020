const demo = [1721, 979, 366, 299, 675, 1456];

var fs = require("fs");
var text = fs.readFileSync("./input-real.txt").toString();
console.log(text);
var textByLine = text.split("\r\n");
var numArray = textByLine.map(e => parseInt(e))

console.log(numArray)


function totalProduct (arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j=i+1 ; j < arr.length; j++){
            if (arr[i]+arr[j] == 2020){
                return arr[i]*arr[j]
            }
        }
    }
}

console.log(totalProduct(numArray));