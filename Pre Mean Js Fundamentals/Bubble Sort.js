arr = [10, 9, 8, 7, 6, 5, 4]
function printArray(x) {
    b = x.length;
    for(var j = 0; j < b; j++) {
        for (var i  = 0; i < b; i++) {
            if (x[i] > x[i + 1]){
                var temp = x[i]
                x[i] = x[i + 1]
                x[i + 1] = temp
            }
        }
    }
    return x
}
console.log(printArray(arr));

// arr = [10, 9, 8, 7, 6, 5, 4]
// function printArray(x) {
//     b = x.length;
//     for (var j = 0; j < b; j++) {
//         for (var i = 0; i < b; i++) {
//             if (x[i] > x[i + 1]) {
//                 var temp = x[i]
//                 console.log("x[i+1] = " + x[i+1] + " is being tested")
//                 console.log("x[i] = " + x[i] + " is greater than " + x[i+1])
//                 x[i] = x[i + 1]
//                 console.log("We swap values to make it temp")
//                 x[i + 1] = temp
//             }
         
//         }
//     }
//     return x;
// }
// console.log(printArray(arr));

