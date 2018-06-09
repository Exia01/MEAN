// Max, min, and average
// Write a function that takes an array of numbers as a parameter. 
// Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

var arr = [1, -2, 9, 4];

function minmaxavg(b){
    var min = 0;
    var max = 0;
    var sum = 0;
    for(var i = 0; i < b.length; i++){ 
        sum += b[i]
        if(b[i] > max){
            max = b[i]
        }
        if(b[i] < min){
            min = b[i]
        }
    }
    avg = sum/b.length
    return [min, max, avg];
}
console.log(minmaxavg(arr));